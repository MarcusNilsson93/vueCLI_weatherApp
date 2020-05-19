<template>
  <div class="hello">
    <h2>{{ headline }}</h2>
    <input type="text" v-model="textfieldCity" name="cityField" id="city" />
    <input type="button" value="Sök" @click="getData(textfieldCity)" />
    <div id="info" v-if="weatherInfo[0]">
      <p>Vädret i {{textfieldCity}},{{weatherInfo[0].sys.country}}</p>
      <p>Beskrivningen av dagens väder är {{weatherInfo[0].weather[0].description}}</p>
      <p>Temperaturen i {{weatherInfo[0].name}} är {{weatherInfo[0].main.temp}} C</p>
      <p>Lägsta temperaturen idag är {{weatherInfo[0].main.temp_min}} C</p>
      <p>Det känns som {{weatherInfo[0].main.feels_like}} C</p>
      <p>Luften blåser {{weatherInfo[0].wind.speed}} meter per sekund</p>
      <p>Luften styrkan är {{weatherInfo[0].main.pressure}} hPa</p>
      <p>Luftfuktigheten är {{weatherInfo[0].main.humidity}} %</p>
      <p>Latituden är {{weatherInfo[0].coord.lat}}</p>
      <p>Longituden är {{weatherInfo[0].coord.lon}}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherInfo",
  props: {
    headline: String
  },
  data() {
    return {
      textfieldCity: "",
      weatherInfo: []
    };
  },
  methods: {
    getData(city) {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&mode=json&units=metric&lang=se&appid=38ac9de24ce628f7b5830c15b7bfadd2"
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (this.weatherInfo === []) {
            this.weatherInfo.push(data);
          } else {
            this.weatherInfo = [];
            this.weatherInfo.push(data);
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #42b983;
}

p {
  color: black;
  font-size: 1em;
}
</style>
