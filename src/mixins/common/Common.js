import Vue from 'vue'
import Cookies from 'js-cookie'

Vue.mixin({
  data () {
    return {
    }
  },
  methods: {
    getCookie (name) {
      return Cookies.get(name)
    },
    setCookie (name, value, expireDay) {
      if (value) {
        Cookies.set(name, value, {
          expires: expireDay,
        })
      } else {
        this.removeCookie(name)
      }
    },
    removeCookie (name) {
      Cookies.set(name, false, { expires: -1 })
    },
    deepCopy (obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    isImageFile (mimeType) {
      return ['image/jpeg', 'image/png', 'image/gif'].contains(mimeType)
    },
    getFormattedNumber (val) {
      let formattedNumber = val ? String(val).replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
      if (val < 0) {
        formattedNumber = '-' + formattedNumber
      }
      return formattedNumber
    },
    inputOnlyNumber (event) {
      event = event || window.event
      let keyID = event.which ? event.which : event.keyCode
      if (!(
        (keyID >= 48 && keyID <= 57)
        || (keyID >= 96 && keyID <= 105)
        || keyID === 8 || keyID === 46 || keyID === 37 || keyID === 39
      )) {
        return false
      }
    },
    removeChar (event) {
      event = event || window.event
      let keyID = event.which ? event.which : event.keyCode
      if (keyID === 8 || keyID === 46 || keyID === 37 || keyID === 39) {

      } else {
        event.target.value = event.target.value.replace(/[^0-9]/g, '')
      }
    },
    movePage (url, payload) {
      if (!url) return
      if (payload) {
        let params = []
        for (let p in payload) {
          if (payload.hasOwnProperty(p)) {
            params.push(p + '=' + payload[p])
          }
        }
        url += '?' + params.join('&')
      }
      window.location.href = url
    },
  },
})
