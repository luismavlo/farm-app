<script setup lang="ts">
import LoadingModal from '@/shared/LoadingModal.vue'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import useProduct from '../composables/useProduct'

const route = useRoute()
const router = useRouter()

const { product, isLoading, isError } = useProduct(+route.params.id)

watch(isError, () => {
  if (isError.value) router.replace('/products')
})
</script>

<template>
  <div>
    <LoadingModal v-if="isLoading" />

    <div v-if="product?.id">
      <ProductCard :product="product" />
    </div>
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

h2::before {
  content: '';
  display: block;
  height: 65%;
  width: 60%;
  position: absolute;
  top: 40%;
  left: 50%;
  background: rgb(253, 115, 29);
  background: linear-gradient(
    143deg,
    rgba(253, 115, 29, 1) 12%,
    rgba(242, 130, 59, 1) 35%,
    rgba(224, 143, 81, 1) 63%,
    rgba(246, 181, 137, 1) 89%
  );
  opacity: 0.8;
  z-index: -1;
  transform: translate(-50%, -50%);
}
</style>
