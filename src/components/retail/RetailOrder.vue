<template>
  <div class="order-list">
    <div class="order-text">
      <div>
        <label for="date"> 주문일 : </label>
        <input type="text" id="date" placeholder="2021-07-13" />
      </div>
      <div>
        <label for="name"> 주문자 : </label>
        <input type="text" id="name" placeholder="박현지" />
      </div>
      <div>
        <label>수령 방식 : </label>
        <input type="radio" value="express" v-model="serve" />
        <label for="express"> 택배 </label>
        <input type="radio" value="direct" v-model="serve" />
        <label for="direct"> 직접 배송 </label>
        {{ serve }}
      </div>
      <div>
        <label for="address"> 주소 : </label>
        <input
          type="text"
          id="address"
          placeholder="경기도 화성시 동탄순환대로"
        />
      </div>
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
  data() {
    return {
      date: "",
      name: "",
      serve: "",
      address: "",
    };
  },
  methods: {
    fetchData: function () {
      console.log(
        "date : " +
          this.date +
          "name :" +
          this.name +
          "serve :" +
          this.serve +
          "address :" +
          this.address
      );
    },
    getToday: function () {
      const today = new Date();
      const day =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      this.date = day;
    },
  },
};
</script>

<style scoped>
</style>