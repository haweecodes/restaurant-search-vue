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
    selectedRestaurant: '' as string,
    menu: [] as any,
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
    setRestaurant(state, payload) {
      state.selectedRestaurant = payload;
    },
    setMenu(state, payload) {
      state.menu = payload;
    },
  },
  actions: {
    async searchRestaurant(context, payload) {
      try {
        await instance.get(`/search?entity_id=84&entity_type=city&q=${payload}&order=asc`)
          .then((response: any) => {
          // handle success
            context.commit('setResult', response.data.restaurants);
          })
          .catch((error: any) => {
          // handle error
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getCategories(context) {
      try {
        await instance.get('/categories')
          .then((response: any) => {
          // handle success
            context.commit('setCategory', response.data.categories);
          })
          .catch((error: any) => {
          // handle error
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async getDailyMenu(context, payload) {
      const response = await instance.get(`/dailymenu?res_id=${payload}`)
        .then((res: any) => res)
        .catch((error: any) => error.response);

      return response;
    },
  },
  modules: {
  },
});
