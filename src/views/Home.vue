<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/openWeather.png" />
    <WeatherInfo headline="Skriv in namnet på den stad du vill kolla vädret i och tryck på sök!" />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherInfo from "@/components/WeatherInfo.vue";

export default {
  name: "Home",
  components: {
    WeatherInfo
  }
};
</script>
