
# avo

> Functions for building UI in JavaScript

```js
var {app, html, css} = require('avo')

// ...
```

Three main goals to this:

 - Ability to build apps in full JavaScript
 - Speedy. Uses Snabby on top of Snabbdom
 - Small.  No bloat, just separate into packages

## Installation

```sh
$ npm install --save avo
# with Yarn:
$ yarn add avo
```

## Usage

### `avo(opts)`

State manager and router using a messaging scheme.  Accessed as `avo.app` if destructuring.

```js
var avo = require('avo')
var { app, ... } = require('avo')

var foo = app({
  // opts
})
```

### `avo.html`

A template string tag based on [Snabby](https://github.com/jamen/snabby) that creates your views.

```js
var { app, html } = require('avo')

var foo = html`
  <div class='hello'>
    Hello world!
  </div>
`
```

### `avo.css`

A template string tag based on [Sheetify](https://github.com/stackcss/sheetify) that creates your styles

```js
var { app, html, css } = require('avo')

var prefix = css`
  :host {
    color: red
  }
`

var foo = html`
  <div class='${prefix}'>
    Hello world!
  </div>
`
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/avo.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/avo/jamen.svg?style=flat-square)](https://travis-ci.org/avo/jamen) [![downloads/month](https://img.shields.io/npm/dm/avo.svg?style=flat-square)][package] [![downloads](https://img.shields.io/npm/dt/avo.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/avo.svg?style=flat-square)][package] [![support me](https://img.shields.io/badge/support%20me-paypal-green.svg?style=flat-square)](https://www.paypal.me/jamenmarz/5usd) [![follow](https://img.shields.io/github/followers/jamen.svg?style=social&label=Follow)](https://github.com/jamen)
[package]: https://npmjs.com/package/avo
