<template>
  <div class="Swiper_first">
    <div class="top">
      <div class="welcome_word">
        <div class="time">
          <span class="season">{{time.season}}</span>
          <span>{{time.year}}</span>
        </div>
        <div class="show_message">
          <span class="cicle brief">51条</span>
          <span class="cicle count_visit">51条</span>
          <span class="cicle new_publish">51条</span>
        </div>
        <div class="recommed">饭后的一杯下午茶，品尝午后的时光。</div>
        <div class="cicle music_play">
          <i>！</i>
        </div>
      </div>
    </div>
    <div class="bottom">
      <dl>
        <dt>待办事项</dt>
        <dd>打篮球</dd>
        <dd>做好简历</dd>
        <dd>将自己</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper_first",
  data() {
    return {
      season_name: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "september",
        "October",
        "November",
        "December"
      ],
      time: {
        season: "",
        year: new Date().getFullYear()
      }
    };
  },
  mounted() {
    this.time.season = this.season_name[new Date().getMonth()];
  }
};
</script>

<style lang="scss" scoped>
.Swiper_first{
    width:100%;
    height:100%;
}
.cicle {
  transition: all 0.5s;
  background: rgba(28, 185, 233, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top {
  height: 70%;
  .welcome_word {
    background: url("../../../public/img/back/4.jpg");
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ccc;
    flex-flow: column;

    .recommed {
      width: 100%;
      text-align: center;
      color: #ccc;
    }
    .music_play {
      position: absolute;
      height: 40px;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      background: skyblue;
      width: 40px;
    }

    .show_message {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      .brief,
      .new_publish {
        height: 60px;
        width: 60px;
      }

      .count_visit {
        height: 110px;
        width: 110px;
      }
    }

    .time {
      display: flex;
      align-items: center;
      flex-flow: column;
      span:nth-child(1) {
        font-size: 20px;
        color: #ccc;
      }
      span:nth-child(2) {
        font-size: 15px;
        color: #ccc;
      }
    }
  }
}
.bottom {
  height: 30%;
  dl {
    padding: 30px 20px;
    dt {
      font-size: 20px;
      text-align: center;
    }
    dd {
      padding: 5px;
      border-bottom: 2px dotted black;
    }
  }
}
</style>
