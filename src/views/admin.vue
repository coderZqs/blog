<template>
  <div class="admin-container">
    <div class="ad-header">
      <span>{{time}}好</span>
    </div>
    <div class="ad-body">
      <div class="button-group">
        <button @click="addArticle">添加文章</button>
        <!-- <button @click></button> -->
        <!--         <button></button>
        <button></button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      time: ""
    };
  },
  methods: {
    getTime() {
      let newTime = new Date();
      let hour = newTime.getHours();
      switch (hour) {
        case hour < 12:
          this.time = "上午";
          break;
        case hour > 12 && hour < 17:
          this.time = "下午";
          break;
        default:
          this.time = "晚上";
          break;
      }
    },
    addArticle() {
      this.$router.push("/admin/add_article");
    }
  },
  mounted() {
    this.getTime();
  }
};
</script>

<style>
</style>
