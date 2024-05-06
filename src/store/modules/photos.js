import axios from "axios";

const state = () => ({
  allPhotos: [],
  basket: [],
});

const getters = {};

const actions = {
  async getAllPhotos({ commit }) {
    const photos = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    if (photos) {
      commit("setPhotos", photos);
    }
  },
};

const mutations = {
  setPhotos(state, payload) {
    state.allPhotos = payload;
  },

  addToBasket(state, payload) {
    state.basket.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
