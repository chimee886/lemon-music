<template>
  <div class="lm-tab-bar">
    <van-tabbar v-model="active"
                safe-area-inset-bottom>
      <van-tabbar-item v-for="(tab, index) in tabs"
                       :key="index"
                       :name="tab.name"
                       :icon="tab.icon"
                       replace
                       :to="tab.route">
        {{ tab.tabText }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LmTabBar',
  props: {
    activeTab: {
      type: String,
      default: '/'
    }
  },
  setup() {
    const active = ref('home');
    return { active };
  },
  data() {
    return {
      tabs: [{
        name: 'home',
        tabText: '首页',
        icon: 'music-o',
        route: '/'
      }, {
        name: 'discovery',
        tabText: '发现',
        icon: 'search',
        route: '/discovery'
      }, {
        name: 'lemon',
        tabText: '乐萌',
        icon: 'friends-o',
        route: '/lemon'
      }, {
        name: 'me',
        tabText: '我的',
        icon: 'contact',
        route: '/me'
      }]
    };
  },
  watch: {
    activeTab(tab) {
      console.log('tab-----', tab);
      tab ? this.active = tab : this.active = 'home';
    }
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(tab-bar) {
  .van-tabbar {
    .van-tabbar-item {
      color: #646566;
      .van-tabbar-item__text {
        a {
          color: #646566;
        }
      }
      &.van-tabbar-item--active {
        color: $primary;
        a {
          color: $primary;
        }
      }
    }
  }
}
</style>
