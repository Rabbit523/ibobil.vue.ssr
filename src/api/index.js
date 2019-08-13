// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API
// const logRequests = true

const api = createAPI()
const rooturl = 'https://ibobil.fantasylab.io/api/auth/'
// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache()
}

function warmCache() {
  // fetchItems((api.cachedIds.top || []).slice(0, 30))
  // setTimeout(warmCache, 1000 * 60 * 15)
}

function request(method, url, params = null) {
  logRequests && console.log(`requesting ${child}...`)
  // const cache = api.cachedItems
  // let key
  // if (params) {
  //   key = url + '_' + params.source
  // } else {
  //   key = url
  // }
  // if (cache && cache.has(key)) {
  //   logRequests && console.log(`cache hit for ${key}.`)
  //   return Promise.resolve(cache.get(key))
  // } else {
  return new Promise((resolve, reject) => {
    api({
      method: method,
      url: url,
      data: params
    }).then((res) => {
      if (res.status === 200) {
        // cache && cache.set(key, res.data)
        resolve(res.data)
      } else {
        reject('Ibobil API error: ' + res.data.message)
      }

    }).catch((err) => {
      reject('Axios issue: ' + err)
    })
  })
  // }
}

export function fetchAllProducts(id) {
  return request('GET')
}

export function fetchRVData() {
  return request('GET', rooturl + 'getRV')
}

export function fetchRVItem({ id }) {
  return request('GET', rooturl + 'viewOne/' + id)
}

export function fetchProductItem({ id }) {
  return request('GET', rooturl + 'viewOne2/' + id)
}

export function fetchBrandItem({ id }) {
  return request('GET', rooturl + 'brandOne/' + id)
}

export function fetchHomeData() {
  return request('POST', rooturl + 'get_home')
}

export function fetchAllData() {
  return request('GET', rooturl + 'getAll')
}

export function fetchCaravanData() {
  return request('GET', rooturl + 'getCaravan')
}

export function fetchBrandData() {
  return request('GET', rooturl + 'getAllBrand')
}

export function fetchBobilData({ token }) {
  return request('GET', rooturl + 'getBobilerText?token=' + token)
}

export function postLogin({ credential }) {
  return request('POST', rooturl + 'login', credential)
}