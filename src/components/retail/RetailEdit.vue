<template>
  <div>
    <loading v-if="isloading" />
    <div v-if="data !== null">
      <div v-for="(value, name) in data.list" :key="value">
        {{ name }} : {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
import { getRetailItem } from "./getRetailList";
import Loading from "../Loading.vue";

export default {
  name: "RetailEdit",
  data: function() {
    return {
      data: null,
      isloading: false,
      error: null,
    };
  },
  created() {
    this.getData();
  },
  watch: {
    $route: "getData",
  },
  components: {
    loading: Loading,
  },
  methods: {
    getData() {
      this.error = this.data = null;
      this.isloading = true;

      getRetailItem(this.$route.path, (err, post) => {
        if (err) {
          this.error = err.toString();
        } else {
          this.data = post;
        }
        this.isloading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
