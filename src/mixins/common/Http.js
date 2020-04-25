import Vue from 'vue'
import axios from 'axios'

const API_TIMEOUT = 60000

Vue.mixin({
  data () {
    return {
      axios: {},
    }
  },
  computed: {
    apiUrl () {
      return process.env.API_URL
    },
  },
  methods: {
    get (url, payload) {
      return this.request('GET', url, payload, 1)
    },
    post (url, payload) {
      return this.request('POST', url, payload, 1)
    },
    put (url, payload) {
      return this.request('PUT', url, payload, 1)
    },
    delete (url, payload) {
      return this.request('DELETE', url, payload, 1)
    },
    request (method, url, payload) {
      // GET일 경우 queryParameter를 payload로 가공
      if (method === 'GET' && payload) {
        url += ((url.indexOf('?') > -1) ? '&' : '?') + Object.keys(payload).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(payload[key])).join('&')
      }

      let config = {
        responseType: 'json',
        method: method,
        url: url,
        data: payload,
        headers: {},
      }

      let userNo = this.getCookie('user_no')
      let userId = this.getCookie('user_id')
      let userName = this.getCookie('user_name')
      let token = this.getCookie('token')

      let headers = {
        'userNo': userNo,
        'userId': userId,
        'userName': encodeURIComponent(userName),
        'token': token,
      }

      config.headers = headers

      return new Promise((resolve, reject) => {
        let _axios = this.axios

        _axios(config).then(response => {
          resolve(response.data)
        }).catch(error => reject(error))

        _axios = undefined
      })
    },
    responseSuccess (response) {
      return response
    },
    responseError (error) {
      return Promise.reject(error)
    },
  },
  created () {
    this.axios = axios.create({
      timeout: API_TIMEOUT,
      headers: {
        'Authorization': this.getCookie('token'),
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    this.axios.interceptors.response.use(this.responseSuccess, this.responseError)
  },
})
