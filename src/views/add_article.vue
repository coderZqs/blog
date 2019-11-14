<template>
  <section class="ac-body">
    <form action method="post">
      <label for="article_name">
        <input type="text" id="article_name" name="article_name">
      </label>
      <textarea name placeholder="文章内容" id cols="30" rows="10"></textarea>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ac-body {
  form {
    width:100%;
  }
}
</style>
