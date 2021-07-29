<template>
  <div>
    <loading v-if="isloading" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div id="retail-list" v-if="data !== null">
      <div
        class="title text-right font-weight-bold mr-3"
        v-if="data.isShipped === false"
      >
        미발송 : {{ data.notShippedAmount }} kg
      </div>
      <div class="title text-right font-weight-bold mr-3" v-else>
        발송 : {{ data.notShippedAmount }} kg
      </div>
      <b-container fluid>
        <b-table
          hover
          responsive
          :fields="fields"
          :items="data.list"
          small
          thead-class="pink-bg"
          @row-clicked="(item) => getEditPage(item)"
        >
          <template #table-colgroup="scope">
            <col
              v-for="field in scope.fields"
              :key="field.key"
              :style="{
                width: field.key === 'payment' ? '120px' : '200px',
              }"
            />
          </template>
          <template #cell(payment)="data">
            {{ data.item.payment ? "⭕" : "❌" }}
          </template>
        </b-table>
      </b-container>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading.vue";
import { getRetailList, retailListData } from "./getRetailList";

export default {
  name: "RetailList",
  data: function () {
    return {
      ...retailListData,
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
      const isShipped = this.$route.path === "/retail/list" ? false : true;

      getRetailList(this.$route.path, isShipped, (err, post) => {
        this.isloading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.data = post;
        }
      });
    },
    // 이렇게 하면 뒤로 가기 -> 다시 앞으로 가기 버튼 눌렀을 때 데이터가 사라짐ㅠㅠ
    // 서버에서 다시 데이터를 갖고 오는게 맞을듯
    getEditPage(data) {
      this.$router.push({
        name: "RetailEdit",
        params: { id: data.id },
      });
    },
  },
};
</script>

<style>
.pink-bg {
  background-color: #faddde;
}
</style>
