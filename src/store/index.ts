import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'user-key': process.env.VUE_APP_API_KEY,
  },
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    searchRestaurant(context, payload) {
      instance.get(`https://developers.zomato.com/api/v2.1/search?q=${payload}`, {})
        .then((response: any) => {
        // handle success
          console.log(response);
        })
        .catch((error: any) => {
        // handle error
          console.log(error);
        })
        .then(() => {
        // always executed
        });
    },
  },
  modules: {
  },
});
