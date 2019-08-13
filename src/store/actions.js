import {
  fetchRVData,
  fetchRVItem,
  fetchHomeData,
  fetchAllData,
  fetchCaravanData,
  fetchBrandData,
  fetchBrandItem,
  fetchBobilData,
  fetchProductItem,
  postLogin
} from '../api'

export default {
  // ensure data for rendering given list type
  // FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
  //   commit('SET_ACTIVE_TYPE', { type })
  //   return fetchIdsByType(type)
  //     .then(ids => commit('SET_LIST', { type, ids }))
  //     .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
  // },

  // // ensure all active items are fetched
  // ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
  //   return dispatch('FETCH_ITEMS', {
  //     ids: getters.activeIds
  //   })
  // },

  // FETCH_ITEMS: ({ commit, state }, { ids }) => {
  //   // on the client, the store itself serves as a cache.
  //   // only fetch items that we do not already have, or has expired (3 minutes)
  //   const now = Date.now()
  //   ids = ids.filter(id => {
  //     const item = state.items[id]
  //     if (!item) {
  //       return true
  //     }
  //     if (now - item.__lastUpdated > 1000 * 60 * 3) {
  //       return true
  //     }
  //     return false
  //   })
  //   if (ids.length) {
  //     return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
  //   } else {
  //     return Promise.resolve()
  //   }
  // },

  // FETCH_USER: ({ commit, state }, { id }) => {
  //   return state.users[id]
  //     ? Promise.resolve(state.users[id])
  //     : fetchUser(id).then(user => commit('SET_USER', { id, user }))
  // }

  FETCH_ALL_DATA: ({ commit }) => {
    return fetchAllData().then(data => commit('SET_ALL_DATA', { data }))
  },

  FETCH_CARAVAN_DATA: ({ commit }) => {
    return fetchCaravanData().then(data => commit('SET_CARAVAN_DATA', { data }))
  },

  FETCH_BRAND_DATA: ({ commit }) => {
    return fetchBrandData().then(data => commit('SET_BRAND_DATA', { data }))
  },

  FETCH_BRAND_ITEM: ({ commit }, { id }) => {
    return fetchBrandItem({ id }).then(data => commit('SET_BRAND_ITEM', { data }))
  },

  FETCH_RV_DATA: ({ commit, state }) => {
    return fetchRVData().then(data => commit('SET_RV_DATA', { data }))
  },

  FETCH_RV_ITEM: ({ commit, state }, { id }) => {
    return fetchRVItem({ id }).then(data => commit('SET_RV_ITEM', { data }))
  },

  FETCH_HOME_DATA: ({ commit, state }) => {
    return fetchHomeData().then(data => commit('SET_HOME_DATA', { data }))
  },

  FETCH_BOBIL_DATA: ({ commit, state }, { token }) => {
    return fetchBobilData({ token }).then(data => commit('SET_BOBIL_DATA', { data }))
  },

  FETCH_PRODUCT_ITEM: ({ commit, state }, { id }) => {
    return fetchProductItem({ id }).then(data => commit('SET_PRODUCT_ITEM', { data }))
  },

  POST_LOGIN: ({ commit }, { credential }) => {
    return postLogin({ credential }).then(data => commit('SET_LOGIN_DATA', { data }))
  }
}
