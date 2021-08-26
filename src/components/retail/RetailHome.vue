<template>
  <div>
    <h2>소매</h2>
    <router-view></router-view>
    <div>{{ info }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RetailHome",
  data() {
    return {
      info: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      axios
        .get("/retail/getAll")
        .then((res) => (this.info = res.data.data))
        .catch((error) => {
          console.log("proxy request error", error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
