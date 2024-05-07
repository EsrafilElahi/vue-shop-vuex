const state = () => ({
  basket: [],
});

const getters = {};

const mutations = {
  addToBasket(state, payload) {
    state.basket.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
