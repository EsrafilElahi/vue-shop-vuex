import { createStore } from "vuex";
import photosModule from "./modules/photos";

import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ photos: state.photos }),
});

export const store = createStore({
  modules: {
    photos: photosModule,
  },
  plugins: [vuexLocal.plugin],
});
