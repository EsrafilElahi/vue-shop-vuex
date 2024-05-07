<template>
  <div>
    {{ basket }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "-Basket-",

  computed: mapState({
    basket: (state) => state.photos.basket
  })
}
</script>

<style scoped></style>