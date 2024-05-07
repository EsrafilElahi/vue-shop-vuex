<template>
  <div class="flex-center gap-4">
    <button class="btn" @click="handleGetAllPhotos">All Album</button>
    <button class="btn" @click="handleGetPhotoByAlbumId(1)">Album 1</button>
    <button class="btn" @click="handleGetPhotoByAlbumId(2)">Album 2</button>
    <button class="btn" @click="handleGetPhotoByAlbumId(3)">Album 3</button>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: "FilterNav",

  methods: {
    handleGetAllPhotos() {
      this.$store.dispatch('photos/getAllPhotos')
    },

    handleGetPhotoByAlbumId(albumId) {
      this.$store.dispatch('photos/getAlbumPhotosByAlbumId', albumId)
    }
  }

  // computed: mapState({})
}
</script>