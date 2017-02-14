var { app, html } = require('../../')

var start = app({
  state: 0,

  update: {
    increment: (current, amount) => current + amount,
    decrement: (current, amount) => current - amount
  },

  routes: [['/', main]]
})

function main (params, count, send) {
  return html`
    <div.main>
      <span @on:click=${increment}>+</span>
      <span>${count}</span>
      <span @on:click=${decrement}>-</span>
    </div>
  `

  function increment () {
    send('increment', 1)
  }

  function decrement () {
    send('decrement', 1)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  start(document.body)
})
