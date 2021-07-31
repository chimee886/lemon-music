/**
 * 准备工作，清空输出缓冲区，监听退出事件
 */
function ready() {
  console.log();
  process.on('exit', () => {
    console.log();
  });
}

ready();

let menus = [];
let pages = [];
const utils = require('./utils');

/**
 * 打印帮助信息并退出
 */
function help() {
  console.log('Usage: [options]\n'
    + 'Options:\n'
    + '-h, --help                output usage information 打印帮助信息\n'
    + '--menu                    menu 【必填】目录（层级用/分隔，例如：user/manage）\n'
    + '--pages                   pages name 页面名称，多个页面逗号分隔，不指定时默认为index');

  process.exit(0);
}

/**
 * 获取命令行参数
 */
function getCommand() {
  // 处理命令
  for (let i = 2; i < process.argv.length; i += 2) {
    const command = process.argv[i];
    const param = process.argv[i + 1] || '';
    switch (command) {
      case '-h':
      case '--help':
        help();
        break;
      case '--menu':
        menus = param.indexOf('--') === 0 ? [] : param.split('/');
        break;
      case '--pages':
        pages = param.indexOf('--') === 0 ? [] : param.split(',');
        // 去除空目录
        pages = pages.filter(page => page);
        // 传入的页面名称去重
        pages = [...new Set(pages)];
        pages = pages.map(page => utils.kebabCase(page));
        break;
      default:
        break;
    }
  }

  if (!menus.length) {
    help();
  }

  // 没有指定页面名称时，默认添加index页面
  if (pages.length === 0) {
    pages.push('index');
  }
}
getCommand();

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const upperCamelCase = require('uppercamelcase');
menus = menus.map(menu => utils.kebabCase(menu));
const pagePath = path.resolve(__dirname, `../src/views/${ menus.join('/') }`);
const apiPath = path.resolve(__dirname, '../src/api');
const routerPath = path.resolve(__dirname, '../src/router');
const existPages = utils.pages();
// 是否添加一级目录，如果是则要添加api文件以及router文件
let addTopMenu = false;

/**
 * 过滤存在的页面，判断是否是新增一级目录
 * @param pages
 * @return {*}
 */
function filterExistPages(pages) {
  let exists = existPages;
  let i = 0;

  // 判断是否找到指定目录
  for (; i < menus.length; i++) {
    exists = exists.find(menu => menu.name === menus[i]);
    if (!exists) {
      break;
    } else {
      exists = exists.children;
    }
  }

  if (i < menus.length) {
    // 目录未找到，表示新建目录，则不会有重复的页面
    if (i === 0) {
      // 第一个就没找到，则表示新建一级目录
      addTopMenu = true;
    }
    return pages;
  } else if (exists && exists.length) {
    // 找打指定的目录了
    return pages.filter((pageName) => {
      // 查看目录下面是否已经有指定的文件
      const child = exists.find(item => item.name === pageName);

      return !(child && child.children.length === 0);
    });
  }

  return pages;
}

function createFiles(pages, targetPath, type = '页面') {
  const newFiles = [];
  // 创建 package
  pages.forEach((file) => {
    const fileName = path.join(targetPath, file.filename);
    newFiles.push(fileName);
    fileSave(fileName)
      .write(file.content, 'utf8')
      .end('\n');
  });

  if (newFiles.length) {
    console.log(`创建${ type }文件成功，创建成功的文件地址如下：`);
    console.log(newFiles);

    // 等文件创建
    setTimeout(() => {
      if (type === 'api') {
        // 更新api
        const build = exec('npm run update:api');
        build.stdout.on('data', (data) => {
          console.log(`stdout: ${ data }`);
        });
        build.stderr.on('data', (data) => {
          console.error(`stderr: ${ data }`);
        });
      } else if (type === 'router') {
        // 更新router
        const build = exec('npm run update:router');
        build.stdout.on('data', (data) => {
          console.log(`stdout: ${ data }`);
        });
        build.stderr.on('data', (data) => {
          console.error(`stderr: ${ data }`);
        });
      }
    }, 200);
  } else {
    console.warn(`没有创建${ type }文件！`);
  }
}

/**
 * 创建页面文件
 */
function createPage() {
  const newPages = [];

  pages.forEach((pageName) => {
    const menu = menus.join('-');
    const prevName = upperCamelCase(menu);

    let upperCamelName = prevName;
    let kebabName = menu;
    if (pageName !== 'index') {
      kebabName = `${ menu }-${ pageName }`;
      upperCamelName = `${ prevName }${ upperCamelCase(pageName) }`;
    }

    newPages.push({
      filename: `${ pageName }.vue`,
      content: `<template>
  <div class="lm-${ kebabName }">
    ${ pageName }
  </div>
</template>

<script>
export default {
  name: '${ upperCamelName }',
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss';

@include b(${ kebabName }) {
  color: #666;
}
</style>`
    });
  });

  createFiles(newPages, pagePath);
}

/**
 * 创建API文件(对应一级目录)
 */
function createApiFile() {
  const topMenu = menus[0];

  try {
    fs.accessSync(path.join(apiPath, `${ topMenu }.js`), fs.constants.F_OK);
    // 已存在
    return;
  } catch (err) {
    // 不存在
  }

  // api文件
  createFiles([{
    filename: `${ topMenu }.js`,
    content: `import { ajax } from '@/utils';

export default {
  xxApi(params) {
    return ajax.get('xxx', params);
  }
};` }], apiPath, 'api');
}

/**
 * 创建路由文件(对应一级目录)
 */
function createRouterFile() {
  const topMenu = menus[0];

  try {
    fs.accessSync(path.join(routerPath, `${ topMenu }.js`), fs.constants.F_OK);
    // 已存在
    return;
  } catch (err) {
    // 不存在
  }

  // router文件
  createFiles([{
    filename: `${ topMenu }.js`,
    content: `/**
 * xx模块路由
 */
const router = [
  // {
  //   path: '/user-management',
  //   name: 'userManagement',
  //   meta: {
  //     title: '用户管理'
  //   },
  //   component: () => import('@/views/user/management/index.vue')
  // }
];

export default router;`
  }], routerPath, 'router');
}

// 过滤已存在的页面
pages = filterExistPages(pages);
createPage();
if (addTopMenu) {
  createApiFile();
  createRouterFile();
}
