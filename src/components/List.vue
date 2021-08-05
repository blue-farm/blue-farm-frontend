<template>
  <div id="list">
    <b-button id="listbox" class="m-2" v-b-toggle.sidebar variant="info"
      >📜</b-button
    >
    <b-sidebar id="sidebar" shadow>
      <b-nav vertical class="ml-3" id="route-list" ref="routeList">
        <h3>소매</h3>
        <b-nav-item
          v-for="item in data_retail"
          :key="item.path"
          :to="item.path"
        >
          {{ item.name }}</b-nav-item
        >

        <h3>도매</h3>
        <b-nav-item
          v-for="item in data_wholesale"
          :key="item.path"
          :to="item.path"
          >{{ item.name }}</b-nav-item
        >

        <br />
        <div>테스트용</div>
        <b-nav-item
          v-for="item in data_test"
          :key="item.path"
          :to="item.path"
          >{{ item.name }}</b-nav-item
        >
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
import { data_retail, data_wholesale, data_test } from "./listData.js";

export default {
  name: "List",
  data: () => {
    return { data_retail, data_wholesale, data_test };
  },
};
</script>

<style scoped>
.nav-link {
  color: #6326f5;
}

#list {
  text-align: left;
}
</style>
