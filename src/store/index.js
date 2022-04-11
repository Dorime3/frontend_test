import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    productList: []
  },
  mutations: {
    addProductsToList(state, products) {
      state.productList = products
    }
  },
  actions: {
    async getProductList({commit}) {
      const products = await api.getProductsList();
      commit('addProductsToList', products)
    }


    // getProductsList(ctx, data) {
    //   return api.getProductsList();
    // },
  },
  modules: {
  }
})
