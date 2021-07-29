import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home";

import RetailHome from "../components/retail/RetailHome.vue";
import RetailList from "../components/retail/RetailList.vue";
import RetailOrder from "../components/retail/RetailOrder.vue";
import RetailEdit from "../components/retail/RetailEdit.vue";

import WholesaleHome from "../components/wholesale/WholesaleHome.vue";
import WholesaleList from "../components/wholesale/WholesaleList.vue";
import WholesaleOrder from "../components/wholesale/WholesaleOrder.vue";
import WholesaleEdit from "../components/wholesale/WholesaleEdit.vue";

import CompanyHome from "../components/company/CompanyHome.vue";

import NotFound from "../components/404.vue";

Vue.use(VueRouter);

export const opt = {
  routes: [
    { path: "/", component: Home },
    {
      path: "/retail",
      component: RetailHome,
      children: [
        { path: "list", component: RetailList },
        { path: "shippedlist", component: RetailList },
        { path: "order", component: RetailOrder },
        { path: "edit/:id", component: RetailEdit }
      ]
    },
    {
      path: "/wholesale",
      component: WholesaleHome,
      children: [
        { path: "list", component: WholesaleList },
        { path: "order", component: WholesaleOrder },
        { path: "edit/:id", component: WholesaleEdit }
      ]
    },
    {
      path: "/company",
      component: CompanyHome
    },
    { path: "*", component: NotFound }
  ]
};

const router = new VueRouter(opt);

export default router;

//https://jeonghwan-kim.github.io/2018/04/07/vue-router.html
