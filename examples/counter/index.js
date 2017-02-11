var avo = require('../../')
var app = avo.app
var html = avo.html
var css = avo.css

var start = app({
  state: 0,

  update: {
    increment: count => count + 1,
    decrement: count => count - 1
  },

  routes: [['/', main]]
})

function main (params, count, send) {
  return html`
    <div class='main'>
      <span :click=${e => send('increment')}>+</span>
      <span>${count}</span>
      <span :click=${e => send('decrement')}>-</span>
    </div>
  `
}

document.addEventListener('DOMContentLoaded', function () {
  start(document.body)
})
