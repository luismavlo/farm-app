<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectToProductos = () => {
  router.push('/products/form')
}
</script>

<template>
  <div class="floating-button" @click="redirectToProductos">🖥️</div>
  <div class="container">
    <h1>🥪 Café App ☕</h1>

    <RouterView />
  </div>
</template>

<style scoped>
.floating-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: block;
  width: 50px;
  height: 50px;
  background-color: #f39c12;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.floating-button:hover {
  background-color: #e67e22;
  transform: scale(1.1);
}

.floating-button i {
  margin-top: 2px;
}
</style>
