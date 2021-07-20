<template>
  <div class="order-list">
    <div class="order-text">
      <div>
        <label for="date"> 주문일 : </label>
        <input type="text" v-model="date" />
      </div>
      <div>
        <label for="name"> 주문자 : </label>
        <input type="text" v-model="name" placeholder="박현지" />
      </div>
      <div>
        <label>수령 방식 : </label>
        <input type="radio" value="express" v-model="serve" />
        <label for="express"> 택배 </label>
        <input type="radio" value="direct" v-model="serve" />
        <label for="direct"> 직접 배송 </label>
      </div>
      <div>
        <label for="address"> 주소 : </label>
        <input
          type="text"
          v-model="address"
          placeholder="경기도 화성시 동탄순환대로"
        />
      </div>
      <div>
        <label for="phone"> 휴대폰 번호: </label>
        <input type="text" v-model="phone" placeholder="010-000-0000" />
      </div>
    </div>
    <div>
      <p v-if="errorShow">{{ errors }}</p>
    </div>
    <div class="button-list">
      <button @click="fetchData">완료</button>
      <button @click="resetData">초기화</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RetailOrder",
  data() {
    return {
      date: this.getToday(),
      name: "",
      serve: "express",
      address: "",
      phone: "",
      errors: [],
      errorShow: false,
    };
  },
  methods: {
    validationCheck: function () {
      this.errors = [];
      if (!this.name) {
        this.errors.push("이름을 입력하세요.");
      }
      if (this.serve == "express") {
        if (!this.address) {
          this.errors.push("택배의 경우 주소 입력이 필요합니다.");
        }
        if (!this.phone) {
          this.errors.push("택배의 경우 휴대폰 번호 입력이 필요합니다.");
        }
      }
    },
    fetchData: function () {
      this.validationCheck();
      if (this.errors.length == 0) {
        console.log(
          "date : " +
            this.date +
            " name :" +
            this.name +
            " serve :" +
            this.serve +
            " address :" +
            this.address +
            " phone :" +
            this.phone
        );
        alert("정상적으로 추가되었습니다.");
        this.resetData();
      } else {
        this.errorShow = true;
      }
    },
    resetData: function () {
      this.date = this.getToday();
      this.name = "";
      this.serve = "express";
      this.address = "";
      this.phone = "";
      this.errors = [];
      this.errorShow = false;
    },
    getToday: function () {
      const today = new Date();
      const day =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      return day;
    },
  },
};
</script>

<style scoped>
</style>