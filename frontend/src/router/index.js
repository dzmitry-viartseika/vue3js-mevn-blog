import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/homePage.vue';
import CreatePost from '@/pages/createPost.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
