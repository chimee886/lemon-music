<template>
  <div class="lm-lemon">
    lemon
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LmLemon',
  components: {
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(lemon) {
  width: 100%;
  height: 100%;
  background-color: rgb(174, 225, 255);
}
</style>
