<template>
  <Layout />
  <router-view></router-view>
</template>

<script>
import Layout from './components/LayoutComponent.vue';

export default {
  name: 'App',
  components: { Layout }
}
</script> 

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

html body #app {
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 5rem 1rem;
  overflow-x: hidden !important;
}
</style>
