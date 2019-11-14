<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <swiper-first/>
      </div>
      <div class="swiper-slide">
        <swiper-secomd ref="secomd" :activeIndex="activeIndex"/>
      </div>
      <div class="app swiper-slide">
        <swiper-third :activeIndex="activeIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import swiperFirst from "../components/home/first";
import swiperSecomd from "../components/home/secomd";
import swiperThird from "../components/home/third";
import mFooter from "../components/common/footer";
export default {
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    reSetSwiperContainerSize() {
      document.querySelector(".swiper-container").style.height =
        window.screen.availHeight + "px";
      window.onresize = function() {
        document.querySelector(".swiper-container").style.height =
          window.screen.availHeight + "px";
      };
    }
  },
  mounted() {
    let that = this;
    this.reSetSwiperContainerSize();
    var mySwiper = new Swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: function() {
          that.activeIndex = this.activeIndex;
        }
      },
      autoplay: false, //可选选项，自动滑动
      direction: "verical"
    });
  },
  components: {
    swiperFirst,
    swiperSecomd,
    swiperThird,
    mFooter
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100%;
  overflow: hidden;
}
</style>
