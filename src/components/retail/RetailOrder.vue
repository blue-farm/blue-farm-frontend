<template>
  <div class="order-list">
    <div class="order-text">
      <div>
        <label> 주문일 : </label>
        <input type="text" v-model="year" size="4" />
        <label for="year"> 년 </label>
        <input type="text" v-model="month" size="2" />
        <label for="month"> 월 </label>
        <input type="text" v-model="day" size="2" />
        <label for="day"> 일 </label>
      </div>
      <div>
        <label for="name"> 주문자 : </label>
        <input type="text" v-model="name" placeholder="박현지" />
      </div>
      <div>
        <label for="name"> 주문량 : </label>
        <input type="text" v-model="amount" placeholder="1" size="3" />
        <label> kg </label>
      </div>
      <div>
        <label>수령 방식 : </label>
        <input type="radio" value="express" v-model="serve" />
        <label for="express"> 택배 </label> &nbsp;
        <input type="radio" value="direct" v-model="serve" />
        <label for="direct"> 직접 배송 </label>
      </div>
      <div v-if="serve == 'express'">
        <div ref="embed"></div>
        <label for="zip"> 우편번호 : </label>
        <input type="text" v-model="zip" size="5" /> &nbsp;
        <button @click="showApi">검색</button>
      </div>
      <div>
        <label for="address"> 주소 : </label>
        <input
          type="text"
          v-model="address"
          size="25"
          placeholder="경기도 화성시 동탄순환대로"
        />
      </div>
      <div v-if="serve == 'express'">
        <label for="address2"> 상세주소: </label>
        <input type="text" for="address2" placeholder="101동 101호" />
      </div>
      <div>
        <label for="phone"> 휴대폰 번호: </label>
        <input
          type="text"
          v-model="phone"
          placeholder="-를 뺀 숫자만 입력하세요"
        />
      </div>
    </div>
    <div>
      <p v-if="errorShow">{{ errors }}</p>
    </div>
    <div class="button-list">
      <button @click="fetchData">완료</button> &nbsp;
      <button @click="resetData">초기화</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RetailOrder",
  data() {
    return {
      //date: this.getToday(),
      year: this.getCurrentYear(),
      month: this.getCurrentMonth(),
      day: this.getCurrentDay(),
      name: "",
      amount: "",
      serve: "express",
      address: "",
      phone: "",
      errors: [],
      errorShow: false,
      zip: "",
      address2: "",
    };
  },
  methods: {
    showApi: function () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = "";

          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? "," + data.buildingName
                : data.buildingName;
          }
          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }
          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }

          this.zip = data.zonecode;
          this.address = fullRoadAddr;
        },
      }).embed(this.$refs.embed); //.open();
    },
    validationCheck: function () {
      this.errors = [];
      if (!this.name) {
        this.errors.push("이름을 입력하세요.");
      }
      if (!this.amount) {
        this.errors.push("주문량을 입력하세요.");
      }
      if (this.serve == "express") {
        if (!this.zip || !this.addres || !this.address2) {
          this.errors.push("택배의 경우 우편번호/주소 입력이 필요합니다.");
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
            this.year +
            "-" +
            this.month +
            "-" +
            this.day +
            " name :" +
            this.name +
            " amount :" +
            this.amount +
            " serve :" +
            this.serve +
            " zip : " +
            this.zip +
            " address :" +
            this.address +
            this.address2 +
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
      //this.date = this.getToday();
      this.year = this.getCurrentYear();
      this.month = this.getCurrentMonth();
      this.day = this.getCurrentDay();
      this.name = "";
      this.amount = "";
      this.serve = "express";
      this.zip = "";
      this.address = "";
      this.address2 = "";
      this.phone = "";
      this.errors = [];
      this.errorShow = false;
    },
    getCurrentMonth: function () {
      const today = new Date();
      return today.getMonth() + 1;
    },
    getCurrentYear: function () {
      const today = new Date();
      return today.getFullYear();
    },
    getCurrentDay: function () {
      const today = new Date();
      return today.getDate();
    },
  },
};
</script>

<style scoped>
</style>