<template>
  <div class="overflow-x-hidden">
    <FilterNav :selectedFilterNav="selectedFilterNav" :setSelectedFilterNav="setSelectedFilterNav" />

    <div class="flex-between flex-wrap overflow-x-hidden mt-10 gap-5">
      <div v-for="photo in filterPhotos" :key="photo.id" class="flex flex-col flex-center w-[25rem]">
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
      selectedFilterNav: 'all'
    }
  },
  components: { FilterNav, PhotoItemVue },

  methods: {
    setSelectedFilterNav(nav) {
      this.selectedFilterNav = nav
    }
  },

  computed: {
    ...mapState({
      photos: (state) => state.photos.allPhotos,
      basket: (state) => state.photos.basket,
      album1: (state) => state.photos.album1,
      album2: (state) => state.photos.album2,
      album3: (state) => state.photos.album3,
    }),
    // eslint-disable-next-line vue/return-in-computed-property
    filterPhotos() {
      if (this.selectedFilterNav === 'album_1') {
        return this.album1
      } else if (this.selectedFilterNav === 'album_2') {
        return this.album2
      } else if (this.selectedFilterNav === 'album_3') {
        return this.album3
      } else {
        return this.photos
      }
    }
  },

  created() {
    this.$store.dispatch('photos/getAllPhotos')
  },
}
</script>