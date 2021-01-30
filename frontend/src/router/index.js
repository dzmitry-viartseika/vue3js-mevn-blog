import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/homePage.vue';
import CreatePost from '@/pages/createPost.vue';
import articlePage from '@/pages/articlePage.vue';

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
  {
    path: '/article/:id',
    name: 'articlePage',
    props: true,
    component: articlePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
