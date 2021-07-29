<template>
  <div>
    <div v-for="(value, name) in data.list" :key="value">
      {{ name }} : {{ value }}
    </div>
  </div>
</template>

<script>
import { getRetailItem } from "./getRetailList";

export default {
  name: "RetailEdit",
  data: function () {
    return {
      data: null,
    };
  },
  created() {
    this.getData();
  },
  watch: {
    $route: "getData",
  },
  methods: {
    getData() {
      this.error = this.data = null;

      getRetailItem(this.$route.path, (err, post) => {
        this.isloading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.data = post;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
