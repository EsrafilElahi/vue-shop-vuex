<template>
  <div class="flex-center gap-4">
    <button class="btn" :class="{ 'text-white': selectedFilterNav === 'all' }" @click="handleGetAllPhotos">All
      Album</button>
    <button class="btn" :class="{ 'text-white': selectedFilterNav === 'album_1' }"
      @click="handleGetPhotoByAlbumId(1)">Album 1</button>
    <button class="btn" :class="{ 'text-white': selectedFilterNav === 'album_2' }"
      @click="handleGetPhotoByAlbumId(2)">Album 2</button>
    <button class="btn" :class="{ 'text-white': selectedFilterNav === 'album_3' }"
      @click="handleGetPhotoByAlbumId(3)">Album 3</button>
  </div>
</template>

<script>
export default {
  name: "FilterNav",

  props: ['selectedFilterNav', 'setSelectedFilterNav'],

  methods: {
    handleGetAllPhotos() {
      this.$store.dispatch('photos/getAllPhotos')
      this.setSelectedFilterNav('all')
    },

    handleGetPhotoByAlbumId(albumId) {
      this.$store.dispatch('photos/getAlbumPhotosByAlbumId', albumId)
      this.setSelectedFilterNav(`album_${albumId}`)
    }
  }

}
</script>