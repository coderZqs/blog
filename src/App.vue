<template>
  <div class="container">
    <!--     <div class="header">
      <m-header/>
    </div>-->
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mHeader from "./components/common/header";
export default {
  components: {
    mHeader
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset.scss";
html,
body,
#app {
  height: 100%;
}
.header {
  width: 100%;
  position: fixed;
  height: 3.75em;
  top: 0;
}
.active {
  color: #ccc !important;
}
</style>
