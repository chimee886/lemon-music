<template>
  <div class="lm-tab-bar">
    tabbar
  </div>
</template>

<script>
export default {
  name: 'LmTabBar',
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(tab-bar) {
  border: 1px solid red;
}
</style>
