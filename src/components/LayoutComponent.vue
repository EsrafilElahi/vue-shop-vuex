<template>
  <div class="layout-container">
    <router-link :to="{ name: 'Home' }">
      <span class="material-icons">home</span>
    </router-link>

    <router-link :to="{ name: 'Basket' }">
      <span class="material-icons">money</span>
    </router-link>

    <!-- <router-link :to="{ name: 'ProductDetails' }">
      <button>detials</button>
    </router-link> -->
  </div>

  <!-- <slot></slot> -->
</template>

<script>
export default {
  name: "-Layout-"
}
</script>

<style scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
</style>