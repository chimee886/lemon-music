<template>
  <div class="lm-me">
    me
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LmMe',
  components: {
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(me) {
  width: 100%;
  height: 100%;
  background-color: rgb(228, 250, 200);
}
</style>
