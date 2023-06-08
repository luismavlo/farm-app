import type { UniqueProductResponse } from './../interfaces/products'
import type { Product } from '../interfaces/products'
import { ref, computed, watch } from 'vue'
import cafeApi from '@/api/cafe-api'
import { useQuery } from '@tanstack/vue-query'

const getProduct = async (id: number): Promise<Product> => {
  const { data } = await cafeApi.get<UniqueProductResponse>(`/products/${id}`)
  console.log(data.product)
  return data.product
}

const useProduct = (id: number) => {
  const product = ref<Product>()

  const { isLoading, data, isError } = useQuery(['product', id], () => getProduct(id))

  watch(
    data,
    () => {
      if (data.value) product.value = { ...data.value }
    },
    { immediate: true }
  )

  return {
    product,
    isError,
    isLoading
  }
}

export default useProduct
