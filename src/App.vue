<template>
  <div id="app">
    <List />
    <router-view></router-view>
  </div>
</template>

<script>
import List from "./components/List";
import axios from "axios";

axios.defaults.baseURL = "http://35.223.247.96";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  name: "App",
  components: {
    List,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
}
a {
  color: #6326f5;
  text-decoration: none;
  font-size: large;
  font-weight: bold;
}

h2 {
  color: cadetblue;
}
</style>
