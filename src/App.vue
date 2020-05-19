<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hem</router-link>|
      <router-link to="/about">Om Hemsidan</router-link>
    </div>
    <router-view />
    <footer id="footer">
      <p>Copyright© 2020 Marcus Nilsson, All rights reserved</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 50px;
  width: 100%;
  background-color: yellow;
  color: black;
}
</style>
