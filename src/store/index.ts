import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': process.env.VUE_APP_API_KEY,
  },
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [] as any,
    categoryResult: [] as any,
  },
  mutations: {
    setResult(state, payload) {
      state.searchResult = [];
      payload.forEach((item: any) => {
        state.searchResult.push(item.restaurant);
      });
    },
    setCategory(state, payload) {
      state.categoryResult = [];
      payload.forEach((item: any) => {
        state.categoryResult.push(item.categories);
      });
    },
  },
  actions: {
    searchRestaurant(context, payload) {
      instance.get(`/search?q=${payload}`)
        .then((response: any) => {
        // handle success
          context.commit('setResult', response.data.restaurants);
        })
        .catch((error: any) => {
        // handle error
          console.log(error);
        })
        .then(() => {
        // always executed
        });
    },
    getCategories(context) {
      instance.get('/categories')
        .then((response: any) => {
        // handle success
          console.log(response);
          context.commit('setCategory', response.data.categories);
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
