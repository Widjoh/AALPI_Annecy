import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/HomeView.vue';
import PlayGround from '../views/Playground.vue';
import Contact from '../views/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/pricing',
        name: 'tarifs',
        component: PlayGround,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Add a navigation guard to check authentication status

// router.beforeEach(async (to, from, next) => {
//     const isAuthenticated = !!localStorage.getItem('token');
//
//     if (to.meta.requiresAuth && !isAuthenticated) {
//         next('/Login');
//     } else if (to.meta.requiresAuth && isAuthenticated) {
//         try {
//             const response = await axios.get(process.env.VUE_APP_ROOT_API + 'user', {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             if (response.status === 200) {
//                 next();
//             } else {
//                 next('/Login');
//             }
//         } catch (error) {
//             console.error(error);
//             next('/Login');
//         }
//     } else {
//         next();
//     }
// });


export default router;
