<template>
  <div class="container">
    <div ref="scrollBox" class="scroll-box" @click="changePage">
      <ul ref="ul">
        <li>
          <div class="item-box-first">
            <span>MORE THAN A JOURNEY</span>
            <span>滴滴出行</span>
            <span>搜索</span>
            <span>下载客户端</span>
          </div>
        </li>
        <li>
          <div class="banner">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
          </div>
        </li>
        <li>
          <div class="item-box-first">
            <span>MORE THAN A JOURNEY</span>
            <span>滴滴出行</span>
            <span>搜索</span>
            <span>下载客户端</span>
          </div>
        </li>
        <li>
          <div class="item-box-first">
            <span>MORE THAN A JOURNEY</span>
            <span>滴滴出行</span>
            <span>搜索</span>
            <span>下载客户端</span>
          </div>
        </li>
      </ul>
      <div class="icon-bottom">
        <div>向下</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 100
    };
  },
  methods: {
    changePage() {
      this.$refs.ul.style.transform = `translateY(-${this.i}%)`;
      this.i += 100;
    }
  },
  mounted() {
    this.axios.get("/api/3/news/hot").then(res => {
      console.log(res);
    });
    this.$refs.ul.style.height = window.screen.availHeight * 4 + "px";
    this.$refs.scrollBox.style.height = window.screen.availHeight + "px";
  }
};
</script>

<style lang="scss">
.scroll-box {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .icon-bottom {
    transform: translate(-50%, -50%);
    bottom: 3.75rem;
    left: 50%;
    position: absolute;
    div {
      animation: bicon 1s infinite;
    }
  }
  ul {
    transition: all 1s;
    height: 400%;
    width: 100%;
    li {
      height: 100%;
      width: 100%;
      .item-box-first {
        margin-top: 3.75rem;
      }
      .banner {
        width: 300%;
        display: flex;
        justify-content: space-around;
        .item {
          width: 60%;
          height: 6.25rem;
          background: Red;
        }
      }
    }
  }
}

.list-enter-active {
  transition: all 1s;
}
/** 移除过程 **/
.list-leave-active {
  transition: all 1s;
} 
/*** 开始插入、移除结束的位置变化 ***/
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(1.875rem);
}
@keyframes bicon {
  50% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
