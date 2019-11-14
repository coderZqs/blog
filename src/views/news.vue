<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">slider1</div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  components: {
    Swiper
  },
  mounted() {
    this.axios.get("/api/news").then(res => {
      console.log(res);
    });

    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });

    /*     let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper, {
      scrollX: true,
      click: true,
      probeType: 2
    });
    scroll.scrollTo(0, -100, 1000);
    scroll.on("scroll",(pos)=>{
      console.log(pos)
    }) */
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
