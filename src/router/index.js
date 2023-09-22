import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: "/products",
        name: 'products',
        component: () => import('../components/Products.vue')
    },
    {
        path: "/product/:id",
        name: 'product',
        component: () => import('../components/Product.vue'),
        meta: {
            title: 'Product'
        }
    },
    {
        path: "/about",
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'About'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
})
export default router;