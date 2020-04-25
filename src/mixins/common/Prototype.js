/* eslint-disable no-extend-native */
Array.prototype.contains = function (obj) {
  var i = this.length
  while (i--) {
    if (this[i] === obj) {
      return true
    }
  }
  return false
}
Array.prototype.remove = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      this.splice(i, 1)
      break
    }
  }
  return this
}

String.prototype.replaceAll = function (a, b) {
  return this.replace(new RegExp(a, 'gm'), b)
}
String.prototype.zfill = function (pad, length) {
  return (new Array(length + 1).join(pad) + this).slice(-length)
}
