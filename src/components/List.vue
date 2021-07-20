<template>
  <div id="list">
    <div id="route-list_button">
      <b-button variant="info" @click="onVisible">📜</b-button>
    </div>
    <b-nav vertical id="route-list" ref="routeList">
      <b-button variant="warning" @click="onVisible">닫기❌</b-button>

      <h3>소매</h3>
      <b-nav-item to="/retail/list" @click="onVisible">주문 목록</b-nav-item>
      <b-nav-item to="/retail/order" exact @click="onVisible"
        >주문서 작성</b-nav-item
      >

      <h3>도매</h3>
      <b-nav-item to="/wholesale/list" @click="onVisible">주문 목록</b-nav-item>
      <b-nav-item to="/wholesale/order" exact @click="onVisible"
        >주문서 작성</b-nav-item
      >
      <b-nav-item to="/company" exact @click="onVisible"
        >도매 업체 관리</b-nav-item
      >

      <br />
      <div>테스트용</div>
      <b-nav-item to="/" exact @click="onVisible">홈으로 돌아가기💨</b-nav-item>
      <b-nav-item to="/retail/edit/1" exact @click="onVisible"
        >소매 주문서 수정</b-nav-item
      >
      <b-nav-item to="/wholesale/edit/1" exact @click="onVisible"
        >도매 주문서 수정</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "List",
  methods: {
    onVisible() {
      this.$refs.routeList.classList.toggle("visible");
    },
  },
};
</script>

<style scoped>
#route-list {
  display: none;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0rem;
  left: 0rem;
  background-color: #eae8fd;
  z-index: 1;
  width: 40%;
  height: 100%;
}

#route-list.visible {
  display: flex;
}

#route-list_button {
  position: fixed;
  left: 1rem;
  top: 1rem;
}
</style>
