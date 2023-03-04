<template>
  <div class="home">
    <Core @weather="weather" msg="Welcome to Your Vue.js App" />
    <div v-if="fetched">
      <div class="data-container d-flex justify-content-between">
        <div class="left">
          <div class="title">{{data.name}}</div>
          <div class="temp">{{Math.round(data.main.temp)}}&#176;</div>
        </div>
        <div id="status" class="status">{{data.weather[0].main}}</div>
      </div>
      <div class="extra-info">
        <div class="extra-info-data align-items-center">
          <div class="info">
            <div class="num">{{Math.round(data.main.feels_like)}}&#176;</div>
            <div class="desc">Feels Like</div>
          </div>
          <div class="info">
            <div class="num">{{data.main.humidity}}%</div>
            <div class="desc">Humidity</div>
          </div>
          <div class="info">
            <div class="num">{{data.wind.speed}} Km/h</div>
            <div class="desc">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Core from "@/components/Core.vue";
export default {
  name: "Home",
  components: {
    Core,
  },
  data () {
    return{
      data: {
        name: '',
        main: {
          temp_max: 0,
          temp_min: 0
        },
        temp: 0,
        weather: [{
          description: '',
          main: ''
        }],
        wind: {
          speed: 0
        }
      },
      fetched: false
    }
  },
  methods: {
    weather (obj) {
      this.fetched = true
      this.data = obj
    }
  }
};
</script>
<style>
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.data-container{
  color: white;
  width: 85%;
  margin: 0 auto;
  margin-top: 100px;
}
.left{
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: leftToRight;
}
@keyframes leftToRight {
  0%{
    transform: translateX(-1000%);
  }
  100%{
    transform: translateX(0%);
  }
}
.title{
  font-size: 2em;
}
.temp{
  font-size: 7em;
  font-weight: bold;
}
.status{
  font-size: 1.5em;
  align-self: center;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: RightToLeft;
  animation-fill-mode: forwards;
}
@keyframes RightToLeft {
  0%{
    transform: translateX(1000%);
  }
  100%{
    transform: translateX(0%)  rotate(-90deg);
  }
}
.extra-info{
  background: rgba(255,255,255, 0.15);
  width: 45%;
  height: 10vh;
  margin: 0 auto;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: calc((100vw - 45%) / 2);
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  animation-name: bottomToTop;
  animation-fill-mode: forwards;
}
@keyframes bottomToTop {
  0%{
    transform: translateY(-1000%);
  }
  100%{
    transform: translateY(0%);
  }
}
.extra-info-data{
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: space-around;
  color: white;
}
.num{
  text-align: center;
}
.desc{
  font-weight: bold;
}
@media (max-width: 656px) {
  .extra-info{
    width: 80%;
    left: calc((100vw - 80%) / 2);
  }
}
</style>