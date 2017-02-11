var sheetify = require('sheetify/transform')

// TODO:
// - sheetify/transform
// - snabbify module
// - other performance transforms?

module.exports = function (file, opts) {
  return sheetify(file, opts)
}
