const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') { return }
  modules[fileName.toLowerCase().replace(/(\.\/|\.js)/g, '')] = requireModule(fileName).default
})

export default modules
