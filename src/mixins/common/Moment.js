import Vue from 'vue'
import moment from 'moment'
import 'moment-timezone'

Vue.mixin({
  methods: {
    now (format = 'YYYY-MM-DD') {
      return moment().format(format)
    },
  },
  created () {
    moment.tz.setDefault('Asia/Seoul')
  },
})
