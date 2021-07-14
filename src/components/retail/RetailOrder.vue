<template>
  <div class="order-list">
    <div class="order-text">
      <div>주문일 : {{ date }}</div>
      <div>주문량 : {{ count }}kg</div>
      <div>주문자 : {{ name }}</div>
      <div>수령 방식 : {{ serve }}</div>
      <div>주소 : {{ address }}</div>
    </div>
    <div class="button-list">
      <button @click="fetchData">완료</button>
      <button @click="fetchData">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RetailOrder",
  props: {
    date: { type: String },
    name: { type: String },
    count: { type: String },
    serve: { type: String },
    address: { type: String },
  },
  methods: {
    fetchData: function () {
      console.log("aaa");
    },
  },
};
</script>

<style scoped>
</style>