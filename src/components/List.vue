<template>
  <div id="list">
    <div id="route-list_button">
      <button @click="onVisible">📜</button>
    </div>
    <div id="route-list" ref="routeList">
      <button @click="onVisible">닫기❌</button>

      <h3>소매</h3>
      <router-link to="/retail/list" @click.native="onVisible"
        >주문 목록</router-link
      >
      <router-link to="/retail/order" exact @click.native="onVisible"
        >주문서 작성</router-link
      >

      <h3>도매</h3>
      <router-link to="/wholesale/list" @click.native="onVisible"
        >주문 목록</router-link
      >
      <router-link to="/wholesale/order" exact @click.native="onVisible"
        >주문서 작성</router-link
      >
      <router-link to="/company" exact @click.native="onVisible"
        >도매 업체 관리</router-link
      >

      <br />
      <div>테스트용</div>
      <router-link to="/" exact @click.native="onVisible"
        >홈으로 돌아가기💨</router-link
      >
      <router-link to="/retail/edit/1" exact @click.native="onVisible"
        >소매 주문서 수정</router-link
      >
      <router-link to="/wholesale/edit/1" exact @click.native="onVisible"
        >도매 주문서 수정</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  methods: {
    onVisible: function() {
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
