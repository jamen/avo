var createRouter = require('sheet-router')
var href = require('sheet-router/href')
var walk = require('sheet-router/walk')

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
  var state = opts.state !== undefined ? opts.state : {}
  var update = opts.update || {}
  var route = createRouter(opts, opts.routes || [])
  var rendering = false
  var current
  var view

  function send (name, arg1, arg2, arg3, arg4, arg5) {
    state = update[name](state, arg1, arg2, arg3, arg4, arg5)
    html.update(current, current = view(state, send))
  }

  walk(route, function (route, cb) {
    return function (params) {
      return function (state) {
        // TODO: hooks?
        return cb(state, send)
      }
    }
  })

  href(function (path) {
    view = route(path)
    if (rendering) {
      http.update(current, current = view(state, send))
    }
  })

  // Start application
  return function start (entry) {
    view = route(window.location.href + '/')
    html.update(entry, current = view(state, send))
  }
}
