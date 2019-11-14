<template>
  <div class="weather">
    <div class="w-header">
      <m-header></m-header>
    </div>
    <item-box title="概括">
      <div class="header_weather item">
        <span>建议:{{weather.ganmao}}</span>
        <span>当前温度:{{weather.wendu}}</span>
      </div>
    </item-box>
    <item-box title="未来天气">
      <div class="forecast item">
        <div class="small">
          <canvas class="canvas_charts" width="25rem" height="25rem"></canvas>
        </div>
      </div>
    </item-box>
  </div>
</template>

<script>
import mHeader from "../components/common/header";
import itemBox from "../components/common/item";
import Chart from "chart.js";
export default {
  data() {
    return {
      weather: {}
    };
  },
  components: {
    mHeader,
    itemBox
  },
  mounted() {
    this.axios.get("/api/weather").then(res => {
      if (res.data.code === 200) {
        this.weather = res.data.weather;
      }
      let ctx2 = document.querySelector(".canvas_charts");
      let cloud_data_high = [],
        cloud_data_low = [];
      this.weather.forecast.forEach(item => {
        cloud_data_high.push(Number(item.high.replace(/[^0-9]/gi, "")));
        cloud_data_low.push(Number(item.low.replace(/[^0-9]/gi, "")));
      });
      let myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["今天", "明天", "后天", "大大后天", "大大大后天"],
          datasets: [
            {
              label: "天气表",
              backgroundColor: "rgba(225,10,10,0.3)",
              borderColor: "rgba(225,103,110,1)",
              borderWidth: 1,
              pointStrokeColor: "#fff",
              pointStyle: "crossRot",
              data: cloud_data_high,
              cubicInterpolationMode: "monotone",
              spanGaps: "false",
              fill: "false"
            }
          ]
        },
        options: {}
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.w-header{
  height:3.75rem;
}
.header_weather {
  display: flex;
  flex-flow: column;
  span {
    font-size: 0.75rem;
    border-bottom: 0.0625rem solid #ccc;
    margin-top: 0.625rem;
  }
}
</style>
