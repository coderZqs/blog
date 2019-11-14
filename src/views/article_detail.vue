<template>
  <div class="article_detail">
    <m-header></m-header>
    <div class="ad-header">
      <span>
        <router-link to="/">首页</router-link>
        <span class="arrow">丨</span>
      </span>
      <span>
        <router-link to="/article">生活区</router-link>
        <span class="arrow">丨</span>
      </span>
      <span>
        <router-link to="/article/type">{{article.type}}</router-link>
        <span class="arrow">丨</span>
      </span>
      <span class="article_name">{{article.article_name}}</span>
    </div>
    <div class="content-box"></div>
    <div class="recemmend_article">
      <dl>
        <dt>前端优化:防抖与节流</dt>
        <dd>{{article.content}}</dd>
      </dl>
    </div>
    <div class="comment">
      <div class="c-header">
        <img src="../../public/img/back/3.jpg" alt>
        <p>发表我的评论</p>
      </div>
      <form class="form_comment">
        <textarea rows="10" placeholder="写点什么" />
        <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import mHeader from "../components/common/header";
export default {
  data() {
    return {
      article: []
    };
  },
  mounted() {
    const cid = this.$route.params.id;
    this.axios.get(`/api/article/byCid/${cid}`).then(res => {
      console.log(res.data.article);
      this.article = res.data.article;
    });
  },
  components: {
    mHeader
  }
};
</script>

<style lang="scss" scoped>
.ad-header {
  width:100%;
  font-size:14px;
  height: 1.25rem;
  line-height: 1.25rem;
  padding: 0.625rem;
  border-bottom: 0.0625rem solid #ccc;
  a {
    color: green;
  }
  .article_name {
    color: #aaa;
  }
}

.c-header{
  display:flex;
  width:100%;
  height:3.75rem;
  padding:0.3125rem 0.625rem;
  align-items: center;
  img{
    height:2.5rem;
    width:2.5rem;
    margin-right:1.25rem;
  }
}
.form_comment{
  padding:0 0.625rem;
  textarea{
    width:100%;
  }
  button{
    width:100%;
    height:1.875rem;
    background:green;
    color:white;
  }
}
.recemmend_article{
  padding:0.625rem;
  dl{

  }
}
</style>
