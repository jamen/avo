var createRouter = require('sheet-router')
var href = require('sheet-router/href')

// Views
var html = exports.html = require('snabby')([
  'eventlisteners',
  'attributes',
  'props'
])

// Styles
exports.css = require('sheetify')

// State
exports.app = function app (opts) {
  if (!opts) opts = {}
  var state = opts.state || {}
  var route = createRouter(opts, opts.routes || [])

  // TODO:
  // - message system for state
  // - handle `href` updates
  // - everything
}
