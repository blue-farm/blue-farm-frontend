<template>
  <div>
    <loading v-if="isloading" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div id="retail-list" v-if="data !== null">
      <!-- 분기 처리 해뒀는데 바꿔야 할까낭 -->
      <div
        class="title text-right font-weight-bold mr-3"
        v-if="data.isShipped === false"
      >
        미발송 : {{ data.notShippedAmount }} kg
      </div>
      <div class="title text-right font-weight-bold mr-3" v-else>
        발송 : {{ data.shippedAmount }} kg
      </div>
      <!--  -->
      <b-container fluid>
        <b-table
          hover
          responsive
          :fields="fields"
          :items="data.list"
          small
          thead-class="pink-bg"
          @row-clicked="(item) => getEditPage(item)"
          :per-page="perPage"
          :current-page="currentPage"
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
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        pills
        align="center"
        class="text-success"
      ></b-pagination>
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
      perPage: 15,
      currentPage: 1,
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
  computed: {
    rows() {
      return this.data.isShipped
        ? this.data.shippedAmount
        : this.data.notShippedAmount;
    },
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

.page-item.active .page-link {
  background-color: cadetblue;
  border-color: cadetblue;
}
.page-link {
  color: cadetblue;
}
.table th,
.table td {
  border-top: 1px solid #faddde;
}
.table thead th {
  border-bottom: none;
}
</style>
