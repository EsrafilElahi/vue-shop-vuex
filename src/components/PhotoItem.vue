<template>
  <div class="w-[25rem] flex-center gap-3 flex-col break-all overflow-hidden border p-3 rounded-lg">
    <img :src="photo.thumbnailUrl" :alt="photo.title" />
    <h5 class="w-[10rem] text-center">{{ photo.title }}</h5>
    <span>price : {{ photo.id }}0000</span>
    <button class="btn !bg-[#2fe4d5bb]" @click="handleAddToBasket(photo)">add to basket</button>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: ['photo'],

  methods: {
    handleAddToBasket(photo) {
      this.$store.commit('photos/nestedPhotos/addToBasket', photo);
    }
  }
}
</script>
