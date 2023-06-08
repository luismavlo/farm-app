<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '../interfaces/products'

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <figure class="card" v-for="product in props.products" :key="product.id">
      <div class="card__emoji">{{ product.image }}{{ product.image }}</div>
      <div class="card__title-box">
        <h2 class="card__title">{{ product.name }}</h2>
      </div>

      <div class="card__details">
        <div class="card__detail-box" v-show="product.isNew">
          <h6 class="card__detail card__detail--organic">New!</h6>
        </div>

        <div class="card__detail-box">
          <h6 class="card__detail">{{ product.quantity }}</h6>
        </div>

        <div class="card__detail-box">
          <h6 class="card__detail card__detail--price">{{ product.price }}€</h6>
        </div>
      </div>

      <RouterLink
        class="card__link"
        :to="{
          name: 'product-id',
          params: { id: product.id }
        }"
      >
        <span>Detail <i class="emoji-right">👉</i></span>
      </RouterLink>
    </figure>
  </div>
</template>

<style scoped>
.cards-container {
  margin-top: 8rem;
}

.card {
  margin-top: 2em;
  background: white;
  box-shadow: 0 2rem 6rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 5rem;
  transform: skewX(-20deg);
  display: flex;
  transition: all 0.5s;
}

.card__emoji {
  font-size: 5.5rem;
  line-height: 1.2;
  padding: 1.5rem 6rem 0.5rem 1.5rem;
  letter-spacing: -4rem;
  transform: skewX(20deg);
}

.card__title-box {
  background: rgb(246, 181, 137);
  background: linear-gradient(
    143deg,
    rgba(246, 181, 137, 1) 0%,
    rgba(224, 143, 81, 1) 26%,
    rgba(242, 130, 59, 1) 55%,
    rgba(253, 115, 29, 1) 90%
  );
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 0 3rem;
}

.card__title {
  font-family: 'Megrim', sans-serif;
  color: white;
  font-size: 3.25rem;
  transform: skewX(20deg);
}

.card__details {
  display: flex;
}

.card__detail-box {
  align-self: stretch;
  border-right: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.card__detail-box:last-child {
  border: none;
}

.card__detail {
  font-weight: 400;
  font-size: 1.8rem;
  transform: skewX(20deg);
  padding: 1.75rem;
}

.card__detail--organic {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 1.9rem;
  background: rgb(246, 181, 137);
  background: linear-gradient(
    143deg,
    rgba(246, 181, 137, 1) 0%,
    rgba(224, 143, 81, 1) 26%,
    rgba(242, 130, 59, 1) 55%,
    rgba(253, 115, 29, 1) 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.card__detail--price {
  font-weight: 900;
  font-size: 1.9rem;
}

.card__link:link,
.card__link:visited {
  flex: 0 0 auto;
  background-color: rgba(242, 130, 59, 1);
  color: white;
  font-size: 1.6rem;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  padding: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.card__link:hover,
.card__link:active {
  background-color: rgba(224, 143, 81, 1);
}

.card__link span {
  transform: skewX(20deg);
}

.card:hover {
  transform: skewX(-20deg) scale(1.08);
  box-shadow: 0 3rem 8rem 2rem rgba(0, 0, 0, 0.15);
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
