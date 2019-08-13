import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      homeData: null,
      products: null,
      product: null,
      entries: null,
      caravans: null,
      bobil: null,
      brands: null,
      brand: null,
      item: null,
      additionalInfo: null,
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      },
    },
    actions,
    mutations,
    getters
  })
}
