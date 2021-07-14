<template>
  <div>
    <div class="retail-list">
      <div class="title">
        <div>총 미납 : kg</div>
      </div>
      <div class="list-1">
        <div>미납품</div>
        <div>납품</div>
        <div>미수금</div>
        <div>수금</div>
      </div>
      <div class="list-2">
        <div>거래처명</div>
        <div>총 주문(kg)</div>
        <div>총 미납(kg)</div>
      </div>
      <div class="list-3"></div>
      <div class="list-4">
        <div>주문 kg</div>
        <div>미납 kg</div>
        <div>납품 kg</div>
        <div>거래일</div>
        <div>납기일</div>
        <div>kg 당 가격</div>
        <div>납품 여부</div>
        <div>대금 처리</div>
      </div>
      <div class="list-4"></div>
    </div>
  </div>
</template>

<script>
import data from "../tmpdata/WholesaleList.json";
export default {
  name: "WholesaleList",
  data: function () {
    return data;
  },
};
</script>

<style scoped>
.title,
.list-1 {
  display: flex;
  justify-content: flex-end;
  margin-right: 4rem;
}

.list-1 > div {
  margin-left: 1rem;
}
.list-2 {
  display: flex;
}
.list-2 > div {
  margin-left: 1rem;
}
.list-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
