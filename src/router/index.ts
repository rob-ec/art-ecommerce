import AboutPage from '@/views/AboutPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SingleProductPage from '@/views/SingleProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Início',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'Sobre',
      component: AboutPage,
    },
    {
      path: '/products',
      name: 'Produtos',
      component: ProductsPage,
    },
    {
      path: '/product/:id',
      name: 'Produto',
      component: SingleProductPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
    },
  ],
})

export default router
