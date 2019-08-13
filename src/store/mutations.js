import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  SET_RV_DATA: (state, { data }) => {
    state.products = data.products
  },

  SET_RV_ITEM: (state, { data }) => {
    state.item = data.product
    state.additionalInfo = JSON.parse(data.additional)
  },

  SET_HOME_DATA: (state, { data }) => {
    state.homeData = data.infos
  },

  SET_ALL_DATA: (state, { data }) => {
    state.products = data.products
    state.entries = data.entries
  },

  SET_CARAVAN_DATA: (state, { data }) => {
    state.caravans = data.products
  },

  SET_BRAND_DATA: (state, { data }) => {
    state.brands = data.brands
  },

  SET_BRAND_ITEM: (state, { data }) => {
    state.brand = data
  },

  SET_BOBIL_DATA: (state, { data }) => {
    state.bobil = data
  },

  SET_PRODUCT_ITEM: (state, { data }) => {
    state.product = data
  },

  SET_LOGIN_DATA: (state, { data }) => {
    state.login = data
    if (localStorage) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user-info', JSON.stringify(data.user));
    }
  }
}
