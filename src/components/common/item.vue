<template>
  <div class="item-container">
    <div class="item-box">
      <p>{{title}}</p>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      title:{
          type:String,
          value:"111"
      }
  }
};
</script>

<style lang="scss" scoped>
.item-box {
    p{
        padding:0.3125rem;
        display:inline-block;
        border-left:0.25rem solid skyblue;
    }
    .item{
        padding:1.25rem;
    }
}
</style>
