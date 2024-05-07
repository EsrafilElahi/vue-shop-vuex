<template>
  <div class="overflow-x-hidden">
    <FilterNav />

    {{ basket }}

    <div class="flex-between flex-wrap overflow-x-hidden mt-10 gap-5">
      <div v-for="photo in photos" :key="photo.id" class="flex flex-col flex-center w-[25rem]">
        <PhotoItemVue :photo="photo" />
      </div>

    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue';
import { mapState } from 'vuex';
import PhotoItemVue from '@/components/PhotoItem.vue';

export default {
  name: '-Home-',
  data() {
    return {}
  },
  components: { FilterNav, PhotoItemVue },

  computed: mapState({
    photos: (state) => state.photos.allPhotos,
    basket: (state) => state.photos.basket,
  }),

  created() {
    this.$store.dispatch('photos/getAllPhotos')
  },
}
</script>