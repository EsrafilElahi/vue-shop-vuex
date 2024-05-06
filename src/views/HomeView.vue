<template>
  <div class="overflow-x-hidden">
    <FilterNav />

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
    return {
      cards: [
        {
          id: 1,
          imag: 'img 1',
          title: 'title 1',
          price: 100000
        },
        {
          id: 2,
          imag: 'img 2',
          title: 'title 2',
          price: 200000
        },
        {
          id: 3,
          imag: 'img 3',
          title: 'title 3',
          price: 550000
        }
      ]
    }
  },
  components: { FilterNav, PhotoItemVue },

  computed: mapState({
    photos: state => state.photos.allPhotos.data
  }),

  created() {
    this.$store.dispatch('photos/getAllPhotos')
  },
}
</script>