/**
 * Main Vuex
 */

export default {
  namespaced: true,
  state: {
    book: null,
    bookList: [],
  },
  mutations: {
    setBook: function (state, data) {
      state.book = data.book
    },
    setBookList: function (state, data) {
      state.bookList = data.bookList
    },
  },
  actions: {
    getBook (context, payload) {
      let url = this._vm.apiUrl + 'book'
      url += '/' + payload['bookNo']
      delete payload['bookNo']

      return new Promise((resolve, reject) => {
        this._vm.get(url).then(response => {
          context.commit('setBook', response)
          resolve(response)
        }).catch(error => reject(error))
      })
    },
    getBookList (context, payload) {
      let url = this._vm.apiUrl + 'book'

      return new Promise((resolve, reject) => {
        this._vm.get(url, payload).then(response => {
          context.commit('setBookList', response)
          resolve(response)
        }).catch(error => reject(error))
      })
    },
    postBook (context, payload) {
      let url = this._vm.apiUrl + 'book'

      return new Promise((resolve, reject) => {
        this._vm.post(url, payload).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },
    putBook (context, payload) {
      let url = this._vm.apiUrl + 'book'
      url += '/' + payload['bookNo']
      delete payload['bookNo']

      return new Promise((resolve, reject) => {
        this._vm.put(url).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },
    deleteBook (context, payload) {
      let url = this._vm.apiUrl + 'book'
      url += '/' + payload['bookNo']
      delete payload['bookNo']

      return new Promise((resolve, reject) => {
        this._vm.delete(url).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },
  },
}
