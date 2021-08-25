<template>
  <div>
    <h2>소매</h2>
    <router-view></router-view>
    <div>{{ info }}</div>
  </div>
</template>

<script>
import axios from "axios";

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  name: "RetailHome",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://35.223.247.96/retail/getAll", config)
      .then((res) => (this.info = res));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
