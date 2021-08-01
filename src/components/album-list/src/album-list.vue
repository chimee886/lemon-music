<template>
  <div class="lm-album-list">
    <div ref="scroll"
         class="scroll-wrapper">
      <div class="scroll-content">
        <div class="scroll-item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
  name: 'LmAlbumList',
  props: {},
  data() {
    return {
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        // listening scroll event
        probeType: 3
      });
      this.bs.on('scrollStart', () => {
        console.log('scrollStart-');
      });
      this.bs.on('scroll', ({ y }) => {
        console.log('scrolling-', y);
      });
      this.bs.on('scrollEnd', () => {
        console.log('scrollingEnd');
      });
    }
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(album-list) {
.scroll-wrapper {
  position: relative;
  width: 90%;
  margin: 80px auto;
  white-space: nowrap;
  border: 3px solid #42b983;;
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
  .scroll-content{
    display: inline-block;
    .scroll-item{
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      display: inline-block;
      text-align: center;
      padding: 0 10px;
      border: 1px solid red;
    }
  }
}
}
</style>
