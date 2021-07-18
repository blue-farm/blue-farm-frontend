<template>
  <div>
    <loading v-if="isloading" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div id="retail-list" v-if="data !== null">
      <div class="title">
        <div>미발송 : {{ data.notShippedAmount }} kg</div>
      </div>
      <div class="list-1">
        <div>미발송</div>
        <div>발송</div>
        <div>입금</div>
        <div>미입금</div>
      </div>
      <div class="list-2">
        <div>주문일자</div>
        <div>주문자</div>
        <div>kg</div>
        <div>간략주소</div>
        <div>입금여부</div>
      </div>
      <div class="list-2" v-for="item in data.list" v-bind:key="item.id">
        <div>{{ item.date }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.amount }}</div>
        <div>{{ item.address }}</div>
        <div>{{ item.payment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading.vue";
import { getRetailList } from "./getRetailList";

export default {
  name: "RetailList",
  data: function () {
    return { data: null, isloading: false, error: null };
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

      getRetailList(this.$route, (err, post) => {
        this.isloading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.data = post;
          //console.log(this.data);
        }
      });
    },
  },
};
</script>

<style scoped>
.title,
.list-1 {
  display: flex;
  justify-content: center;
}
.list-1 {
  justify-content: flex-end;
  margin-right: 4rem;
}
.list-1 > div {
  margin-left: 1rem;
}
.list-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>