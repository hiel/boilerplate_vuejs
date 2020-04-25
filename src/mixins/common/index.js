// 믹스인 로더
const requireModule = require.context('.', false, /\.js$/)

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') { return }
  requireModule(fileName)
})
