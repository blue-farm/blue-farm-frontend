<template>
  <div id="list">
    <div id="route-list_button">
      <b-button variant="info" @click="onVisible">📜</b-button>
    </div>
    <b-nav vertical id="route-list" ref="routeList">
      <b-button variant="warning" @click="onVisible">닫기❌</b-button>

      <h3>소매</h3>
      <b-nav-item
        v-for="item in data_retail"
        :key="item.path"
        :to="item.path"
        @click="onVisible"
      >
        {{ item.name }}</b-nav-item
      >

      <h3>도매</h3>
      <b-nav-item
        v-for="item in data_wholesale"
        :key="item.path"
        :to="item.path"
        @click="onVisible"
        >{{ item.name }}</b-nav-item
      >

      <br />
      <div>테스트용</div>
      <b-nav-item
        v-for="item in data_test"
        :key="item.path"
        :to="item.path"
        @click="onVisible"
        >{{ item.name }}</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import { data_retail, data_wholesale, data_test } from "./listData.js";

export default {
  name: "List",
  methods: {
    onVisible() {
      this.$refs.routeList.classList.toggle("visible");
    },
  },
  data: () => {
    return { data_retail, data_wholesale, data_test };
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

.nav-link {
  color: #6326f5;
}
</style>
