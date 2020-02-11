import Vue from "vue";
import VueRouter from "vue-router";
import Dynamic from "../views/Dynamic.vue";
import HomeBlocks, { State as HomeState } from "@/views/blocks/Home";
import AboutBlocks, { State as AboutState } from "@/views/blocks/About";

Vue.use(VueRouter);

export const options = [
  {
    path: "/",
    name: "Dynamic",
    component: Dynamic,
    props: { Blocks: HomeBlocks, State: HomeState }
  },
  {
    path: "/about",
    name: "About",
    component: Dynamic,
    props: { Blocks: AboutBlocks, State: AboutState }
  }
];

const router = new VueRouter({
  routes
});

export default router;
