<template>
  <div class="lm-home">
    <!-- 头部搜索部分 -->
    <div class="lm-home__header">
      <van-search
        v-model="keyword"
        shape="round"
        placeholder="请输入搜索关键词" />
    </div>
    <!-- 轮播部分 -->
    <div class="lm-home__swiper">
      <van-swipe
        class="swipe-cantainer"
        :autoplay="3000"
        indicator-color="white">
        <van-swipe-item
          v-for="(image, index) in swipers"
          :key="index">
          <div class="swiper-img">
            <img :src="image" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 推荐歌单 -->
    <lm-sub-title title="推荐歌单" />
    <van-skeleton
      title
      :row="3"
      :loading="loading">
      <lm-album-list />
    </van-skeleton>
    <!-- 精选定制 -->
    <lm-sub-title title="精选定制" />
    <van-skeleton
      title
      :row="3"
      :loading="loading">
      领卡
    </van-skeleton>
    <!-- 每日推荐 -->
    <lm-sub-title title="每日推荐" />
    <van-skeleton
      title
      :row="3"
      :loading="loading">
      领卡
    </van-skeleton>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LmHome',
  components: {
  },
  data() {
    return {
      // 搜索关键词
      keyword: '',
      // swiper图片地址
      swipers: [
        'http://img.lizhi334.cn/default_banner_1.png',
        'http://img.lizhi334.cn/default_banner_2.png',
        'http://img.lizhi334.cn/default_banner_3.png'
      ],
      loading: true
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>

<style lang="scss">
@import '../../../assets/scss';

@include b(home) {
  padding-bottom: 50px;
  @include e(header) {
    margin-top: 5px;
    .van-search {
      .van-search__content {
        .van-cell {
          padding: 6px 5px;
        }
      }
    }
  }
  @include e(swiper){
    margin: 5px 0;
    .swipe-cantainer {
      .van-swipe__track {
        .van-swipe-item {
          padding: 0 12px;
          border-radius: 8px;
          overflow: hidden;
          .swiper-img {
            height: 150px;
            border-radius: 8px;
            overflow: hidden;
            img {
            }
          }
        }
      }
    }
  }
}
</style>
