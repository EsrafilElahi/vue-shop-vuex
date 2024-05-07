import axios from "axios";
import nestedPhotos from "./nestedPhotos";

// actions ---> async like api ==> dispatch
// mutations ----> sync like setState inside app ==> commit

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
      !state.album1.length > 0 ||
      !state.album2.length > 0 ||
      !state.album3.length > 0
    ) {
      console.log("album id api :", albumId);
      const albumPhotos = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );

      if (albumPhotos) {
        if (albumId === 1) {
          commit("setAlbumPhotos_1", albumPhotos.data);
        } else if (albumId === 2) {
          commit("setAlbumPhotos_2", albumPhotos.data);
        } else {
          commit("setAlbumPhotos_3", albumPhotos.data);
        }
      }
    }
  },
};

const mutations = {
  setPhotos(state, payload) {
    state.allPhotos = payload;
  },

  setAlbumPhotos_1(state, payload) {
    state.album1 = payload;
  },

  setAlbumPhotos_2(state, payload) {
    state.album2 = payload;
  },

  setAlbumPhotos_3(state, payload) {
    state.album3 = payload;
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
