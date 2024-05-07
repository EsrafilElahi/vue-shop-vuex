import axios from "axios";
import nestedPhotos from "./nestedPhotos";

const state = () => ({
  allPhotos: [],
  album1: [],
  album2: [],
  album3: [],
  // basket: [],
});

const getters = {};

const actions = {
  async getAllPhotos({ commit, state }) {
    if (!state?.allPhotos?.length > 0) {
      const photos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      if (photos) {
        commit("setPhotos", photos.data);
      }
    }
  },

  async getAlbumPhotosByAlbumId({ commit, state }, albumId) {
    if (
      !state.album1.length > 1 ||
      !state.album2.length > 1 ||
      !state.album3.length > 1
    ) {
      const albumPhotos = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );

      if (albumPhotos) {
        // if (albumId === 1) {
        //   state.album1 = albumPhotos;
        // } else if (albumId === 2) {
        //   state.album2 = albumPhotos;
        // } else {
        //   state.album3 = albumPhotos;
        // }

        commit("setAlbumPhotos", albumPhotos, albumId);
      }
    }
  },
};

const mutations = {
  setPhotos(state, payload) {
    state.allPhotos = payload;
  },

  setAlbumPhotos(state, payload, albumId) {
    if (albumId === 1) {
      state.album1 = payload;
    } else if (albumId === 2) {
      state.album2 = payload;
    } else {
      state.album3 = payload;
    }
  },

  // addToBasket(state, payload) {
  //   state.basket.push(payload);
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    nestedPhotos,
  },
};
