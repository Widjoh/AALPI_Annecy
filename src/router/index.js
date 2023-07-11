import {createRouter, createWebHistory} from 'vue-router';
import Admin from '../views/Admin/Admin.vue';
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
        meta: {requiresAuth: true},
    },
    {
        path: '/admin/images',
        name: 'adminImages',
        component: Images,
        meta: {requiresAuth: true},
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
import axios from 'axios';
import Images from "@/views/Admin/Images.vue";

router.beforeEach(async (to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/Login');
    } else if (to.meta.requiresAuth && isAuthenticated) {
        try {
            const response = await axios.get(process.env.VUE_APP_ROOT_API + 'user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.status === 200) {
                next();
            } else {
                next('/Login');
            }
        } catch (error) {
            console.error(error);
            next('/Login');
        }
    } else {
        next();
    }
});


export default router;
