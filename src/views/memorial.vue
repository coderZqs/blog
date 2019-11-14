<template>
  <div class="memorial">
    <div class="m-header">
      <m-header/>
    </div>
    <div class="content-box">
      <div class="mc-header">
        <h1>备忘录</h1>
      </div>
      <div class="content" ref="content">
        <dl @click="router_go" :data-cid="item.id" v-for="item in memoiral" :key="item.pub_date">
          <dt>{{item.title}}</dt>
          <!-- <dd>{{content}}</dd> -->
          <dd>{{item.pub_date}}</dd>
          <dd>{{item.type}}</dd>
        </dl>
      </div>
    </div>
    <div class="bottom-bar">
      <svg
        @click="crud"
        t="1570943120313"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1599"
        width="200"
        height="200"
      >
        <path
          d="M405.2992 163.9424H225.28c-33.8944 0-61.44 27.5456-61.44 61.44v180.0192c0 33.8944 27.5456 61.44 61.44 61.44h180.0192c33.8944 0 61.44-27.5456 61.44-61.44V225.3824c0-33.8944-27.5456-61.44-61.44-61.44z m20.48 241.4592c0 11.264-9.216 20.48-20.48 20.48H225.28c-11.264 0-20.48-9.216-20.48-20.48V225.3824c0-11.264 9.216-20.48 20.48-20.48h180.0192c11.264 0 20.48 9.216 20.48 20.48v180.0192zM405.2992 557.1584H225.28c-33.8944 0-61.44 27.5456-61.44 61.44v180.0192c0 33.8944 27.5456 61.44 61.44 61.44h180.0192c33.8944 0 61.44-27.5456 61.44-61.44V618.5984c0-33.792-27.5456-61.44-61.44-61.44z m20.48 241.4592c0 11.264-9.216 20.48-20.48 20.48H225.28c-11.264 0-20.48-9.216-20.48-20.48V618.5984c0-11.264 9.216-20.48 20.48-20.48h180.0192c11.264 0 20.48 9.216 20.48 20.48v180.0192zM798.72 163.9424H618.7008c-33.8944 0-61.44 27.5456-61.44 61.44v180.0192c0 33.8944 27.5456 61.44 61.44 61.44H798.72c33.8944 0 61.44-27.5456 61.44-61.44V225.3824c0-33.8944-27.5456-61.44-61.44-61.44z m20.48 241.4592c0 11.264-9.216 20.48-20.48 20.48H618.7008c-11.264 0-20.48-9.216-20.48-20.48V225.3824c0-11.264 9.216-20.48 20.48-20.48H798.72c11.264 0 20.48 9.216 20.48 20.48v180.0192zM798.72 557.1584H618.7008c-33.8944 0-61.44 27.5456-61.44 61.44v180.0192c0 33.8944 27.5456 61.44 61.44 61.44H798.72c33.8944 0 61.44-27.5456 61.44-61.44V618.5984c0-33.792-27.5456-61.44-61.44-61.44z m20.48 241.4592c0 11.264-9.216 20.48-20.48 20.48H618.7008c-11.264 0-20.48-9.216-20.48-20.48V618.5984c0-11.264 9.216-20.48 20.48-20.48H798.72c11.264 0 20.48 9.216 20.48 20.48v180.0192z"
          p-id="1600"
        ></path>
      </svg>

      <span class="count-memorial">{{memoiral.length}}条备忘录</span>
      <svg
        @click="edit"
        t="1570943083199"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="861"
        width="200"
        height="200"
      >
        <path
          d="M900.2496 525.07648v352.19456a46.65344 46.65344 0 0 1-46.61248 46.60224H149.26848a46.6432 46.6432 0 0 1-46.60224-46.60224V172.89216a46.66368 46.66368 0 0 1 46.60224-46.60224H501.4528v-40.96H149.26848c-48.2816 0-87.56224 39.28064-87.56224 87.56224v704.37888c0 48.2816 39.28064 87.56224 87.56224 87.56224h704.36864c48.29184 0 87.57248-39.28064 87.57248-87.56224V525.07648h-40.96z"
          p-id="862"
        ></path>
        <path
          d="M935.2192 120.29952L515.93216 539.56608l-28.95872-28.95872L906.24 91.3408z"
          p-id="863"
        ></path>
      </svg>
    </div>
    <!-- <m-footer></m-footer> -->
  </div>
</template>

<script>
import mHeader from "../components/common/header";
import mFooter from "../components/common/footer";
export default {
  name: "memorial",
  data() {
    return {
      memoiral: [
        {
          id: 2,
          title: "去接小孩",
          type: "日常",
          pub_date: "上午11.56"
        },
        {
          id: 2,
          title: "去接小孩",
          type: "日常",
          pub_date: "上午11.56"
        },
        {
          id: 2,
          title: "去接小孩",
          type: "日常",
          pub_date: "上午11.56"
        },
        {
          id: 2,
          title: "去接小孩",
          type: "日常",
          pub_date: "上午11.56"
        }
      ]
    };
  },
  methods: {
    router_go(e) {
      const id = e.currentTarget.dataset.cid;
      this.$router.push({
        path: `/memorial/${id}`
      });
    },
    edit() {
      this.$router.push({
        path: "/memorial/edit"
      });
    },
    crud() {
      console.log(this.$refs.content.style.transform)
    }
  },
  components: {
    mHeader,
    mFooter
  }
};
</script>

<style lang="scss" scoped>
.memorial {
  width: 100%;
  height: 100%;
  background: #fcfcfc;
}
.m-header {
  height: 3.75rem;
}
.mc-header {
  display: flex;
  justify-content: space-between;
}
.content-box {
  padding: 10px;
  .content {
    width: 100%;
    dl {
      z-index: 99;
      padding: 10px 20px;
      border-bottom: 1px solid #e0e0e0;
      dt {
        font-weight: bold;
        margin: 5px;
      }
      dd {
        display: inline;
        margin: 0 5px;
      }
    }
  }
}
.bottom-bar {
  position: absolute;
  width: 90%;
  left: 5%;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 20px;
    height: 30px;
  }
}
</style>
