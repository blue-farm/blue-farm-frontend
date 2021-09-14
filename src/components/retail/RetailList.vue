<template>
  <div>
    <loading v-if="isLoading" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div id="retail-list" v-if="!isLoading">
      <div class="title text-right font-weight-bold mr-3">
        {{ isShippedPage }}
      </div>
      <b-container fluid>
        <b-table
          hover
          responsive
          :fields="fields"
          :items="retail.list"
          small
          thead-class="pink-bg"
          @row-clicked="(item) => getEditPage(item)"
        >
          <template #table-colgroup="scope">
            <col
              v-for="field in scope.fields"
              :key="field.key"
              :style="{
                width: field.key === 'isPaid' ? '120px' : '200px',
              }"
            />
          </template>
          <template #cell(isPaid)="retail">
            {{ retail.item.isPaid ? "⭕" : "❌" }}
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @page-click="pageClick"
          pills
          align="center"
          class="text-success"
        ></b-pagination>
      </b-container>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading.vue";
import { getRetailList, retailListData } from "./getRetailList";

export default {
  name: "RetailList",
  data: function() {
    return {
      ...retailListData,
      perPage: 20,
      currentPage: 1,
    };
  },
  created() {
    this.startPage();
  },
  watch: {
    $route: "startPage",
  },
  components: {
    loading: Loading,
  },
  computed: {
    // 수정 필요
    rows() {
      return Math.max(this.retail.unShippedAmount, this.retail.shippedAmount);
    },
    isShippedPage() {
      return this.$route.path.search("/retail/list")
        ? `발송 : ${this.retail.shippedAmount} kg`
        : `미발송 : ${this.retail.unShippedAmount} kg`;
    },
  },
  methods: {
    startPage(pageNum) {
      this.isLoading = true;

      if (pageNum == undefined || isNaN(pageNum)) {
        pageNum = 1;
      }

      getRetailList(this.$route.path, pageNum, (err, post) => {
        if (err) {
          this.error = err.toString();
        } else {
          this.retail = post;
          this.currentPage = pageNum;
        }
        this.isLoading = false;
      });
    },

    getEditPage(data) {
      this.$router.push({
        name: "RetailEdit",
        params: { id: data.id },
      });
    },

    pageClick(bvEvent, pageNum) {
      this.startPage(pageNum);
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
