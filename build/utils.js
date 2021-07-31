/**
 * @Description: 查看组件是否重名
 * @Author: chengwb
 * @Date: 2019/5/14 14:00
 */
const fs = require('fs');
const path = require('path');

function getComponents() {
  // 组件
  const components = {};
  // 遍历指定目录的微件
  const packagePath = path.join(__dirname, '../src/components');
  const files = fs.readdirSync(packagePath);

  for (let i = 0; i < files.length; i++) {
    const componentName = files[i];
    const stat = fs.statSync(`${ packagePath }/${ componentName }`);

    if (stat.isDirectory() === true) {
      components[componentName] = `./components/${ componentName }/index.js`;
    }
  }

  return components;
}

const viewsPath = path.join(__dirname, '../src/views');
function getPages(filePath) {
  const pages = [];
  // 遍历指定目录
  const files = fs.readdirSync(filePath);

  files.forEach((fileName) => {
    const stat = fs.statSync(`${ filePath }/${ fileName }`);
    // 目录则继续
    if (stat.isDirectory()) {
      pages.push({
        name: fileName,
        children: getPages(`${ filePath }/${ fileName }`)
      });
    } else if (fileName.indexOf('.vue') > 0) {
      // 是vue文件则记录
      pages.push({
        name: fileName.split('.')[0],
        children: []
      });
    }
  });

  return pages;
}

function getFileNames(filePath) {
  const fileNames = [];
  // 遍历指定目录
  const files = fs.readdirSync(filePath);

  files.forEach((fileName) => {
    const stat = fs.statSync(`${ filePath }/${ fileName }`);
    // js文件则记录
    if (stat.isFile() && fileName.indexOf('.js') > 0 && !['index.js', 'common.js'].includes(fileName)) {
      fileNames.push(fileName.split('.')[0]);
    }
  });

  return fileNames;
}

function getRouters() {
  const routerPath = path.join(__dirname, '../src/router');
  return getFileNames(routerPath);
}

function getApis() {
  const apiPath = path.join(__dirname, '../src/api');
  return getFileNames(apiPath);
}

module.exports = {
  // 已有的组件
  getComponents,
  // 已有的页面
  pages() {
    return getPages(viewsPath);
  },
  getApis,
  getRouters,
  // 小驼峰转换为短横线 xxXX => xx-xx
  kebabCase(str) {
    const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
    return str.replace(KEBAB_REGEX, function (match) {
      return `-${ match.toLowerCase() }`;
    });
  }
};
