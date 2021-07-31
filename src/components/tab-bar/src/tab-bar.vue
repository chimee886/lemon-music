<template>
  <div class="lm-tab-bar">
    <van-tabbar v-model="active"
                safe-area-inset-bottom>
      <van-tabbar-item name="home"
                       icon="music-o"
                       replace
                       to="/">
        首页
      </van-tabbar-item>
      <van-tabbar-item name="discovery"
                       icon="search"
                       replace
                       to="/discovery">
        发现
      </van-tabbar-item>
      <van-tabbar-item name="lemon"
                       icon="friends-o"
                       replace
                       to="/lemon">
        乐萌
      </van-tabbar-item>
      <van-tabbar-item name="me"
                       icon="contact"
                       replace
                       to="/me">
        我的
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
    return {};
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
