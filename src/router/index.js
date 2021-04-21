import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('/@/views/Home.vue');
const Contact = () => import('/@/views/Contact.vue');
const Aside = () => import('/@/components/Aside.vue');

const routes = [
  {
    path: '/',
    name: Home,
    components: {
      default: Home,
      Aside: Aside,
    }
  },
  {
    path: '/contact',
    name: Contact,
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router