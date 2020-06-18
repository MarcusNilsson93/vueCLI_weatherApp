import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeWeatherInfo: []
  },
  mutations: {
    saveWeather(state, weather) {
      state.storeWeatherInfo = weather
    }
  },
  actions: {

  },
  modules: {}
});
