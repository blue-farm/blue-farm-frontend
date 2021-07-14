<template>
  <div class="retail-list">
    <div class="title">
      <div>미발송 : kg</div>
    </div>
    <div class="list-1">
      <div>미발송</div>
      <div>발송</div>
      <div>입금</div>
      <div>미입금</div>
    </div>
    <div class="list-2">
      <div>주문일자</div>
      <div>주문자</div>
      <div>kg</div>
      <div>간략주소</div>
      <div>입금여부</div>
    </div>
    <div class="list-2"></div>
  </div>
</template>

<script>
export default {
  name: "RetailList",
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
.list-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>