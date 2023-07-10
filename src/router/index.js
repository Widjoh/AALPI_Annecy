import { createRouter, createWebHistory } from 'vue-router';
import Admin from '../views/Admin.vue';
import Home from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import PlayGround from '../views/Playground.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: { requiresAuth: true },
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/pricing',
        name: 'tarifs',
        component: PlayGround,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Add a navigation guard to check authentication status
router.beforeEach((to, from, next) => {
    const isAuthenticated = /* Check if the user is authenticated */ false;

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Redirect to the login page if the route requires authentication and the user is not authenticated
        next('/Login');
    } else {
        // Allow access to the route
        next();
    }
});

export default router;
