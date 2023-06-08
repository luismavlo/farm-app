<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import cafeApi from '@/api/cafe-api'
import type { Product } from '../interfaces/products'
import LoadingModal from '@/shared/LoadingModal.vue'

const router = useRouter()

const product = ref({
  name: '',
  image: '',
  ingredients: '',
  quantity: '',
  price: 0,
  description: ''
})

const createProduct = async (product: Product): Promise<Product> => {
  const { data } = await cafeApi.post<Product>('/products', product)
  return data
}

const productMutation = useMutation(createProduct)

watch(productMutation.isSuccess, () => {
  product.value = {
    name: '',
    image: '',
    ingredients: '',
    quantity: '',
    price: 0,
    description: ''
  }
  window.scrollTo(0, 0)
  setTimeout(() => {
    productMutation.reset()
  }, 2000)
})

const back = () => {
  router.go(-1)
}
</script>

<template>
  <LoadingModal v-if="productMutation.isLoading.value" />

  <div class="notification success" v-if="productMutation.isSuccess.value">
    <span class="icon">&#10003;</span>
    <p>¡Producto creado correctamente!</p>
  </div>

  <figure class="product">
    <div class="product__back" @click="() => back()"><span class="emoji-left">👈</span>Back</div>
    <div class="product__hero">
      <span class="product__emoji product__emoji--1">🥨</span>
      <span class="product__emoji product__emoji--2">🥞</span>
      <span class="product__emoji product__emoji--3">🥪</span>
      <span class="product__emoji product__emoji--4">☕</span>
      <span class="product__emoji product__emoji--5">🧃</span>
      <span class="product__emoji product__emoji--6">🍕</span>
      <span class="product__emoji product__emoji--7">🥯</span>
      <span class="product__emoji product__emoji--8">🥗</span>
      <span class="product__emoji product__emoji--9">🍰</span>
    </div>
    <h2 class="product__name">Create a product</h2>
    <div class="product__details">
      <form class="product-form" @submit.prevent="productMutation.mutate(product)">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" required />
        </div>
        <div class="form-group">
          <label for="image">Emogi:</label>
          <input type="text" id="image" v-model="product.image" required />
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients:</label>
          <textarea id="ingredients" v-model="product.ingredients" required></textarea>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input type="text" id="quantity" v-model="product.quantity" required />
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="product.price" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="product.description" required></textarea>
        </div>
        <button type="submit" :disabled="productMutation.isLoading.value">Create Product</button>
      </form>
    </div>
  </figure>
</template>

<style scoped>
.product {
  width: 60rem;
  margin: 0 auto;
  margin-top: 9rem;
  background: white;
  box-shadow: 0 3rem 6rem 1rem rgba(0, 0, 0, 0.2);
  position: relative;
}

.product__hero {
  position: relative;
  height: 22rem;
  overflow: hidden;
}

.product__hero::before {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(246, 181, 137);
  background: linear-gradient(
    143deg,
    rgba(246, 181, 137, 1) 0%,
    rgba(224, 143, 81, 1) 26%,
    rgba(242, 130, 59, 1) 55%,
    rgba(253, 115, 29, 1) 90%
  );
  opacity: 0.5;
  z-index: 100;
}

.product__emoji {
  font-size: 15rem;
  position: absolute;
}

.product__emoji--1 {
  top: -4rem;
  left: -2rem;
  z-index: 10;
}

.product__emoji--2 {
  top: -6rem;
  left: 9rem;
}

.product__emoji--3 {
  top: -4rem;
  right: 15rem;
}

.product__emoji--4 {
  top: -5rem;
  right: 2rem;
  z-index: 10;
}

.product__emoji--5 {
  bottom: -9rem;
  left: 18rem;
}

.product__emoji--6 {
  bottom: -8rem;
  left: 5rem;
}

.product__emoji--7 {
  bottom: -12rem;
  right: 14rem;
}

.product__emoji--8 {
  bottom: -8rem;
  right: -2rem;
}

.product__emoji--9 {
  top: -7rem;
  left: 19rem;
}

.product__organic {
  position: absolute;
  top: -4rem;
  right: -4rem;
  z-index: 1000;
  height: 11rem;
  width: 11rem;
  background-image: rgb(246, 181, 137);
  background-image: linear-gradient(
    143deg,
    rgba(246, 181, 137, 1) 0%,
    rgba(224, 143, 81, 1) 26%,
    rgba(242, 130, 59, 1) 55%,
    rgba(253, 115, 29, 1) 90%
  );
  border-radius: 50%;
  transform: rotate(15deg);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.product__back,
.product__back:visited {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 1000;
  color: #555;
  background-color: white;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  border-radius: 100rem;
  padding: 0 2rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
}

.product__back:hover,
.product__back:active {
  background-color: rgba(224, 143, 81, 1);
}

.product__name {
  background: rgb(246, 181, 137);
  background: linear-gradient(
    143deg,
    rgba(246, 181, 137, 1) 0%,
    rgba(224, 143, 81, 1) 26%,
    rgba(242, 130, 59, 1) 55%,
    rgba(253, 115, 29, 1) 90%
  );
  padding: 1rem;
  font-family: 'Megrim', sans-serif;
  font-size: 4rem;
  color: white;
  text-align: center;
  word-spacing: 2px;
}

.product__details {
  width: 100%;
  background-color: #eee;
  padding: 4rem 6rem;
  font-size: 1.9rem;
}

.product__link:link,
.product__link:visited {
  display: block;
  background-color: rgba(224, 143, 81, 1);
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem;
  text-align: center;
  transform: scale(1.07) skewX(-20deg);
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.emoji-left {
  font-size: 2rem;
  margin-right: 1rem;
}

.emoji-right {
  font-size: 2rem;
  margin-left: 1rem;
}
.product-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
}

.form-group:first-child {
  margin-top: 2rem;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type='text'],
textarea,
input[type='number'] {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  outline: none;
}

input[type='text']:focus,
input[type='url']:focus,
textarea:focus,
input[type='number']:focus {
  border-color: #4b5f9e;
}

button {
  margin-top: 1.2rem;
  background-color: #e65a1c; /* Cambia este color por el de tu fondo naranja */
  color: #fff; /* Cambia este color por el color de texto que elijas */
  border: none;
  border-radius: 3px;
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  width: 100%;
}

button:hover {
  background-color: #c0392b; /* Cambia este color por uno más oscuro para resaltar el hover */
  cursor: pointer;
  animation: shake 0.3s;
  animation-iteration-count: 1;
}

button:active {
  animation: press 0.1s;
  animation-iteration-count: 1;
}

.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  opacity: 0;
  animation: notification-fade-in 0.5s ease-out forwards;
}

.notification.success {
  background-color: #2ecc71;
}

.notification .icon {
  margin-right: 10px;
  font-size: 20px;
}

.notification p {
  margin: 0;
}

@keyframes notification-fade-in {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
