<template>
  <div class="swiper_secomed">
    <div class="introduce">
      <ul>
        <li>自我介绍</li>
        <li>钟青顺(Sebastian)</li>
        <li>一名前端爱好者</li>
        <li>性格开朗</li>
        <li>渴望接触新事物</li>
        <li>幽默风趣</li>
        <li>走的到叫足迹，走不到叫憧憬是我的座右铭</li>
      </ul>
    </div>
    <div class="skill">
      <ul>
        <li>技能掌握</li>
        <li>精通HTML5 CSS3 JavaScript</li>
        <li>掌握流行的前端框架Jquery，Vue全家桶</li>
        <li>能够基本使用webpack打包工具</li>
        <li>可以使用NodeJs(koa框架)和mongoDb做简单的后台搭建，对数据简单的增删改查并返还给前端</li>
        <li>了解微信小程序</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      value: 0,
      type: Number
    }
  },
  watch: {
    activeIndex(newVal, oldVal) {
      this.onSwiperActive(newVal);
    }
  },
  methods: {
    changeTransform(obj, attr, end) {
      if (obj.length > 1) {
        obj.forEach(item => {
          item.style[attr] = end;
        });
      } else {
        obj.style[attr] = end;
      }
    },
    onSwiperActive(newVal) {
      console.log(newVal);
      const that = this;
      let introduce_li = document.querySelectorAll(".introduce li");
      let skill_li = document.querySelectorAll(".skill li");
      let cicle = document.querySelectorAll(".show_message span");

      if (newVal === 1) {
        that.changeTransform(introduce_li, "transform", "translateX(0%)");
        that.changeTransform(skill_li, "transform", "translateX(0%)");
        that.changeTransform(cicle, "width", "0px");
      } else if (newVal === 0) {
        that.changeTransform(introduce_li, "transform", "translateX(-100%)");
        that.changeTransform(cicle, "width", "60px");
        that.changeTransform(cicle[1], "width", "110px");
        that.changeTransform(skill_li, "transform", "translateX(150%)");
      }
    }
  },
  mounted() {
    console.log(this.activeIndex);
  }
  /*   mounted() {
    this.$on("onSwiperActive", val => {
      this.onSwiperActive(val);
    });
  } */
};
</script>

<style lang="scss" scoped>
.swiper_secomed {
  width: 100%;
  height: 100%;
  overflow: hidden;
  > * {
    height: 50%;
  }
  .introduce {
    /*     background: url("../../../public/img/back/2.jpg");
    background-size: cover; */
    ul {
      height: 100%;
      display: flex;
      flex-flow: column;
      padding: 20px;

      li {
        list-style: disc;
        transform: translateX(-100%);
        border-left: 5px solid white;
        padding: 5px;
        transition: all 1s;
        margin-left: 20px;
      }
      li:nth-child(1) {
        margin-left: 0;
        list-style: none;
        padding: 5px;
        font-size: 20px;
        border-left: 5px solid blue;
      }
    }
  }
  .skill {
    /*     background: url("../../../public/img/back/4.jpg");
    background-size: cover; */
    ul {
      height: 100%;
      padding: 20px;
      li {
        margin-left: 20px;
        padding: 5px;
        transform: translateX(150%);
        transition: all 1s;
        line-height: 20px;
        list-style: square;
      }
      li:nth-child(1) {
        margin-left: 0;
        padding: 10px;
        list-style: none;
        font-size: 20px;
        border-left: 5px solid blue;
      }
    }
  }
}
</style>
