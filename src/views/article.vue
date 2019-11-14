<template>
  <div class="blog-container">
    <m-header></m-header>
    <div class="bc-header">
      <div class="intro_module">
        <img src="../../public/img/back/7.jpg" alt>
        <span>个人博客</span>
        <p>该板块为个人博客，博主不定时的分享美好的事物，比如古诗，文章片段，电影，小说片段，歌曲。在最底部有一个分享板块，可以将你的喜好分享给大家！</p>
      </div>
    </div>
    <div class="body">
      <ul class="content-box" v-if="article.length!=0">
        <li @click="router_go" v-for="item in article" :key="item.article_name">
          <div class="content_article">
            <router-link :to="`/article/`+item.cid" class="title">{{item.article_name}}</router-link>
            <span class="content">{{item.content.slice(0,26)}}</span>
            <img :src="item.content_img" alt>
            <div class="footer">
              <span class="pub_date">{{item.pub_date}}</span>
              <span class="type">{{item.type}}</span>
            </div>
          </div>
        </li>
      </ul>
      <span v-else>
        该板块暂无文章，请通知管理员添加
        <div @click="addArticle">
          <svg
            t="1570946321174"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2962"
            width="200"
            height="200"
          >
            <path
              d="M900.7 432.2H548.4V109.3c0-20.2-16.5-36.7-36.7-36.7-20.2 0-36.7 16.5-36.7 36.7v322.9H122.8c-20.2 0-36.7 16.5-36.7 36.7 0 20.2 16.5 36.7 36.7 36.7h352.3v381.6c0 20.2 16.5 36.7 36.7 36.7 20.2 0 36.7-16.5 36.7-36.7V505.6h352.3c20.2 0 36.7-16.5 36.7-36.7-0.1-20.2-16.6-36.7-36.8-36.7z"
              fill
              p-id="2963"
            ></path>
          </svg>
        </div>
      </span>
    </div>
    <div class="web_footer">
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
import mHeader from "../components/common/header";
import mFooter from "../components/common/footer";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      article: "article"
    })
  },
  methods: {
    getAllArtive() {
      this.axios.get("/api/article/allArticle").then(res => {
        this.$store.commit("EDIT_ARTICLE", res.data.article);
        console.log(111);
      });
    },
    test1() {
      this.axios
        .post("/api/weather/add", {
          data:
            "dasdsaddadasdsaddsasasddsasadsadsadssadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        })
        .then(res => {
          console.log(res);
        });
    },
    addArticle() {
      this.axios
        .post("/api/article/addArticle", {
          type: "web前端",
          content: "让我们来学习前端吧",
          article_name: "防抖与节流",
          pub_date: "1999/06/12"
        })
        .then(res => {
          console.log(res);
        });
    },
    router_go(e) {
      const cid = e.currentTarget.dataset.cid;
      //this.$router.push({ path: "/" });
    }
  },
  created() {
    this.getAllArtive();
  },
  components: {
    mHeader,
    mFooter
  }
};
</script>

<style lang="scss" scoped>
.web_footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.body {
  background: #f7f7f7;
  padding: 0.625rem;
  > ul {
    width: 100%;
    box-sizing: border-box;
    li:nth-child(1) {
      margin-top: 0rem;
    }
    li {
      margin-top: 0.625rem;
      background: white;
      .content_article {
        > * {
          margin-top: 0.625rem;
        }
        padding: 0.625rem;
        box-shadow: 0 0.125rem 0.125rem 0 #ccc;
        display: flex;
        flex-flow: column;
        .footer {
          display: flex;
          margin-top: 1.25rem;
          span.pub_date {
            color: gray;
            font-size: 0.75rem;
          }
          span.type {
            font-size: 0.75rem;
            padding-left: 0.625rem;
            color: blue;
            font-weight: bold;
          }
        }
        a.title {
          margin: 0.125rem;
          padding-left: 0.625rem;
        }
      }
    }
  }
}
.bc-header {
  .intro_module {
    padding: 1.25rem;
    box-shadow: 0.0625rem 0.0625rem 0 #ccc;
    margin: 0 auto;
    img {
      width: 9.375rem;
      float: left;
      padding-right: 1.25rem;
      height: 5.625rem;
    }
    span {
      display: block;
      height: 3.125rem;
      line-height: 3.125rem;
      width: 100%;
      font-weight: bold;
      text-align: center;
    }
    p {
      line-height: 1.6875rem;
    }
  }
}
</style>
