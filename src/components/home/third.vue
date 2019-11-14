<template>
  <div class="three">
    <p>
      <router-link to="/weather">点击</router-link>
    </p>
    <div class="footer" v-if="activeIndex === 2">
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
import mFooter from "../common/footer";
export default {
  props: {
    activeIndex: {
      type: Number,
      default:2
    }
  },
  watch:{
    activeIndex(newVal,oldVal){
      return newVal
    }
  },
  components: {
    mFooter
  }
};
</script>

<style lang="scss" scoped>
.three {
  height: 100%;
  .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
