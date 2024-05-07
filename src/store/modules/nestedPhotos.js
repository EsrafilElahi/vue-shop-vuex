const state = () => ({
  basket: [],
});

const getters = {
  getTotlaPrice: (state) => {
    return state.basket.reduce((acc, val) => {
      return acc + val.id;
    }, 0);
  },
};

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
