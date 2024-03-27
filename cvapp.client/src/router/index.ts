import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/about-us",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((routeTo, routeFrom, next) => {

    next();
});

router.afterEach(() => {
});

export default router;