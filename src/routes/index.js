import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("../views/BasketView.vue"),
  },
  {
    path: "/product-details",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
