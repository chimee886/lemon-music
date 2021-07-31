/**
 * 自动生成组件（components目录下）
 */
// 清空输出缓冲区的数据
console.clear();
// 监听退出
process.on('exit', () => {
  console.log();
});

// 判断命令行参数是否是包含3个
if (!process.argv[2]) {
  console.error('[组件名]必填 - 请输入组件名，格式为：aa-bb');
  process.exit(1);
}

const { exec } = require('child_process');
const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../src/components', componentname);
const utils = require('./utils');

function updateComponentIndexFile() {
  setTimeout(() => {
    const build = exec('npm run update:comp');
    build.stdout.on('data', (data) => {
      console.log(`stdout: ${ data }`);
    });
    build.stderr.on('data', (data) => {
      console.error(`stderr: ${ data }`);
    });
  }, 200);
}

function createComponent() {
  const Files = [
    {
      filename: 'index.js',
      content: `import ${ ComponentName } from './src/${ componentname }';

/* istanbul ignore next */
${ ComponentName }.install = function install(Vue) {
  Vue.component(${ ComponentName }.name, ${ ComponentName });
};

export default ${ ComponentName };`
    },
    {
      filename: `src/${ componentname }.vue`,
      content: `<template>
  <div class="lm-${ componentname }"></div>
</template>

<script>
export default {
  name: 'Lm${ ComponentName }',
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(${ componentname }) {
}
</style>`
    }
  ];

  const components = utils.getComponents();
  if (components[componentname]) {
    console.error(`${ componentname } 已存在.`);
    process.exit(1);
  }

  // 创建 package
  Files.forEach((file) => {
    fileSave(path.join(PackagePath, file.filename))
      .write(file.content, 'utf8')
      .end('\n');
  });

  console.log('DONE!');
}

createComponent();
updateComponentIndexFile();
