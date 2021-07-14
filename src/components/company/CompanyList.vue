<template>
  <div>
    <h2>목록</h2>
    <div class="list-2">
      <div class="list-3">
        <div>거래처명</div>
        <input />
      </div>
      <div class="list-3">
        <div>연락처</div>
        <input />
      </div>
      <div>
        <button>추가/수정</button>
      </div>
    </div>
    <div class="list-1">
      <div>NO.</div>
      <div>거래처명</div>
      <div>연락처</div>
    </div>
    <div class="list-1">
      <div>1</div>
      <div>안녕물산</div>
      <div>1234-4567</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.list-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
