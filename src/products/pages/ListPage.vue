<script setup lang="ts">
import ProductList from '@/products/components/ProductList.vue'
import LoadingModal from '@/shared/LoadingModal.vue'

import useProducts from '../composables/useProducts'

const { isLoading, products } = useProducts()
</script>

<template>
  <div>
    <h2>Menu</h2>

    <ProductList :products="products" />

    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Megrim', sans-serif;
  font-size: 5rem;
  top: 20px;
  color: white;
  text-align: center;
  position: relative;
  word-spacing: 3px;
}
</style>
