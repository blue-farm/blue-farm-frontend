<template>
  <div>
    <h2>도매 업체 관리</h2>
    <CompanyList />
  </div>
</template>

<script>
import CompanyList from "./CompanyList";
export default {
  name: "CompanyHome",
  components: { CompanyList },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
