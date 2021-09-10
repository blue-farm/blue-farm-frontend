<template>
  <div>
    <loading v-if="isloading" />
    <div v-if="id !== null">
      <!--<div v-for="(value, name) in data.list" :key="value">
        {{ name }} : {{ value }}
      </div>-->
      <div>
        <label> 주문일 : </label>
        {{date}}
      </div>
       <div>
        <label> 주문자 :</label>
        <input type="text" v-model="name" />
       </div>
      <div>
        <label> 주문량 : </label>
        <input type="text" v-model="amount"/>
        <label> kg</label>
      </div>
      <div>
        <label> 발송 방식 : </label>
        <input type="radio" value="express" v-model="serve" />
        <label for="express"> 택배 </label> &nbsp;
        <input type="radio" value="direct" v-model="serve" />
        <label for="direct"> 직접 배송 </label>
      </div>
      <div v-if="serve == 'express'">
        <label for="zip"> 우편번호 : </label>
        <input type="text" v-model="zip" size="5" />
      </div>
      <div>
        <label for="address"> 주소 : </label>
        <input type="text" v-model="address" size="25"/>
      </div>
      <div v-if="serve == 'express'">
        <label for="address2"> 상세주소: </label>
        <input type="text" v-model="address2"/>
      </div>
      <div>
        <label for="phone"> 휴대폰 번호: </label>
        <input type="text" v-model="phone" placeholder="-를 뺀 숫자만 입력하세요"/>
      </div>
      <div>
        <label for="isPaid"> 입금 여부:</label>
        <input type="radio" value="0" v-model="isPaid" />
        <label for="1"> 미입금 </label>
        <input type="radio" value="1" v-model="isPaid" />
        <label for="0"> 입금 완료</label>
      </div>
      <div class="button-list">
        <button @click="updateShippedState">배송 완료</button> &nbsp;
        <button @click="updateData"> 수정 완료 </button> &nbsp;
        <button @click="closeWindow"> 닫기 </button>
    </div>
    </div>
  </div>
</template>

<script>
import { getRetailItem } from "./getRetailList";
import Loading from "../Loading.vue";
import axios from "axios";

export default {
  name: "RetailEdit",
  data: function() {
    return {
      id: null,
      isloading: false,
      error: null,
      name: null,
      date: null,
      amount: null,
      phone: null,
      address: null,
      address2: null,
      zip: null,
      isPaid: null,
      isShipped: null,
      delivery: null,
      serve:null,
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
          //this.
          //this.data = post;
          this.id = post.list.id;
          this.name = post.list.name;
          this.date = post.list.date;
          this.amount = post.list.amount;
          this.phone = post.list.phone;
          this.address = post.list.address;
          this.address2 = post.list.address2;
          this.zip = post.list.zip;
          this.isPaid = post.list.isPaid;
          this.isShipped = post.list.isShipped;
          this.serve = post.list.delivery;
        }
        this.isloading = false;
      });
    },
  updateData: function() {
      axios.put('/retail/'+this.id, {
            id: this.id,
            date: this.date,
            name: this.name,
            amount: this.amount,
            phone: this.phone,
            address: this.address,
            address2: this.address2,
            zip: this.zip,
            isPaid: this.isPaid,
            isShipped: this.isShipped,
            delivery: this.serve,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error);
            console.log("error occured");
          });
        alert("정상적으로 수정되었습니다."+this.amount);
  },
  updateShippedState: function(){
      axios.put('/retail/'+this.id, {
            id: this.id,
            date: this.date,
            name: this.name,
            amount: this.amount,
            phone: this.phone,
            address: this.address,
            address2: this.address2,
            zip: this.zip,
            isPaid: this.isPaid,
            isShipped: 1,
            delivery: this.serve,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error);
            console.log("error occured");
          });
          alert("배송완료 처리되었습니다.");
  },
  closeWindow: function(){
    alert("닫기 버튼 처리하기~.~");
  }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
