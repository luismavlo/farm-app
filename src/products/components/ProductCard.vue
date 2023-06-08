<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Product } from '@/products/interfaces/products'
import { toRef } from 'vue'

const router = useRouter()

interface Props {
  product: Product
}

const props = defineProps<Props>()

const product = toRef(props, 'product')

const back = () => {
  router.go(-1)
}
</script>

<template>
  <div>
    <figure class="product">
      <div class="product__organic" v-if="product.isNew"><h5>New</h5></div>
      <div class="product__back" @click="() => back()"><span class="emoji-left">👈</span>Back</div>
      <div class="product__hero">
        <span class="product__emoji product__emoji--1">{{ product.image }}</span>
        <span class="product__emoji product__emoji--2">{{ product.image }}</span>
        <span class="product__emoji product__emoji--3">{{ product.image }}</span>
        <span class="product__emoji product__emoji--4">{{ product.image }}</span>
        <span class="product__emoji product__emoji--5">{{ product.image }}</span>
        <span class="product__emoji product__emoji--6">{{ product.image }}</span>
        <span class="product__emoji product__emoji--7">{{ product.image }}</span>
        <span class="product__emoji product__emoji--8">{{ product.image }}</span>
        <span class="product__emoji product__emoji--9">{{ product.image }}</span>
      </div>
      <h2 class="product__name">{{ product.name }}</h2>
      <div class="product__details">
        <p><span class="emoji-left">💰</span>{{ product.price }} (€)</p>
        <p><span class="emoji-left">📦</span>{{ product.quantity }}</p>
        <p><span class="emoji-left">📗</span>{{ product.ingredients }}</p>
      </div>

      <p class="product__description">{{ product.description }}</p>
    </figure>
  </div>
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

.product__organic h5 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: white;
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
  background-color: #eee;
  padding: 4rem 6rem;
  font-size: 1.9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
}

.product__description {
  padding: 5rem 6rem;
  font-size: 1.6rem;
  line-height: 1.8;
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

.not-organic {
  display: none;
}
</style>
