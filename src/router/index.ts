import ProductLayout from '@/products/layout/ProductLayout.vue'
import FormPage from '@/products/pages/formPage.vue'
import ListPage from '@/products/pages/ListPage.vue'
import ProductPage from '@/products/pages/ProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductLayout,
      redirect: { name: 'products' },
      children: [
        { path: 'products', name: 'products', component: ListPage },
        { path: '/products/:id', name: 'product-id', component: ProductPage },
        { path: '/products/form', name: 'product-form', component: FormPage }
      ]
    }
  ]
})

export default router
