<template>
  <div id="app">
    <div id="nav">
      <lm-tab-bar :active-tab="activeTab"></lm-tab-bar>
    </div>
    <router-view v-slot="{Component}">
      <transition :name="transitionName">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {},
  data() {
    return {
      activeTab: 'home',
      transitionName: 'lm-slide-left'
    };
  },
  watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'lm-slide-left';
      } else {
        this.transitionName = 'lm-slide-right';
      }
      this.activeTab = to.path.replace('/', '');
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
