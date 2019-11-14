<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="items in allData.bannerphoto" :key="items">
      <p>{{items}}</p>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>(分页器)
  </swiper>
</template>

<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      allData: {
        bannerphoto: [1, 2, 3, 4, 5, 6, 7, 8]
      },

      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: false,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {

  }
};
</script>

<style>
/* .swiper-container {
  height: 667px;
  width: 100%;
  overflow: hidden;
}
.swiper-slide {
  height: 667px;
  width: 100%;
} */
</style>
