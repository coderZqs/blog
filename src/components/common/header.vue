<template>
  <nav class="header-container">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/weather">天气</router-link>
      </li>
      <li>
        <router-link to="/article">发表区</router-link>
      </li>
      <li>
        <router-link to="/memorial">备忘录</router-link>
      </li>
      <li>
        <router-link to="/news">小说</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  width: 100%;
  > ul {
    height: 100%;
    li {
      float: left;
      width: 20%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: black;
      a {
        color: white;
      }
    }
  }
}
</style>
