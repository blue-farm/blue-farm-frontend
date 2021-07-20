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
      <b-container fluid>
        <b-table
          hover
          responsive
          :fields="fields"
          :items="data.list"
          head-variant="light"
          small
        >
          <template #table-colgroup="scope">
            <col
              v-for="field in scope.fields"
              :key="field.key"
              :style="{
                width: field.key === 'address' ? '200px' : '120px',
              }"
            />
          </template>
          <template #cell(payment)="data">
            {{ data.item.payment ? "⭕" : "❌" }}
          </template>
          <template #cell(shipped)="data">
            {{ data.item.shipped ? "⭕" : "❌" }}
          </template>
        </b-table>
      </b-container>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading.vue";
import { getRetailList } from "./getRetailList";

export default {
  name: "RetailList",
  data: function () {
    return {
      isloading: false,
      error: null,
      data: null,
      fields: [
        {
          key: "name",
          label: "주문자",
          sortable: true,
          thClass: "align-middle",
          tdClass: "align-middle",
        },
        {
          key: "amount",
          label: "kg",
          sortable: true,
          thClass: "align-middle",
          tdClass: "align-middle",
        },
        {
          key: "address",
          label: "간략 주소",
          sortable: true,
          thClass: "align-middle",
          tdClass: "align-middle",
        },
        {
          key: "payment",
          label: "입금 여부",
          sortable: true,
          thClass: "align-middle",
          tdClass: "align-middle",
        },
        {
          key: "shipped",
          label: "발송 여부",
          sortable: true,
          thClass: "align-middle",
          tdClass: "align-middle",
        },
      ],
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
</style>