<template>
  <div class="lm-sub-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'LmSubTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(sub-title) {
  text-align: left;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
}
</style>
