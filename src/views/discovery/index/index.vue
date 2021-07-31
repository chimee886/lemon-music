<template>
  <div class="lm-discovery">
    Discovery
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LmDiscovery',
  components: {
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(discovery) {
  width: 100%;
  height: 100%;
  background-color: rgb(187, 250, 229);
}
</style>
