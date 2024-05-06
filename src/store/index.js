import { createStore, createLogger } from "vuex";
import photos from "./modules/photos";

export const store = createStore({
  modules: {
    photos,
  },

  plugins: [createLogger()],
});
