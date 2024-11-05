import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import Contact from '../views/Contact.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/pricing', name: 'Pricing', component: Pricing },
    { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;