import TabBar from './src/tab-bar';

/* istanbul ignore next */
TabBar.install = function install(Vue) {
  Vue.component(TabBar.name, TabBar);
};

export default TabBar;
