<!-- markdownlint-disable first-line-heading -->
<p align='center'>
  <img height='200' src='https://img-blog.csdnimg.cn/20210824141749632.gif' />
</p>

# react-signature-canvas-zwb

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/zwb474287221/react-signature-canvas-zwb.svg)](https://npmjs.org/package/react-signature-canvas-zwb)
[![releases](https://img.shields.io/github/tag-pre/zwb474287221/react-signature-canvas-zwb.svg)](https://github.com/agilgur5/react-signature-canvas-zwb/releases)
[![commits](https://img.shields.io/github/commits-since/zwb474287221/react-signature-canvas-zwb/v1.0.2.svg)](https://github.com/agilgur5/react-signature-canvas-zwb/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/react-signature-canvas-zwb.svg)](https://npmjs.org/package/react-signature-canvas-zwb)
[![dy](https://img.shields.io/npm/dy/react-signature-canvas-zwb.svg)](https://npmjs.org/package/react-signature-canvas-zwb)
[![dm](https://img.shields.io/npm/dm/react-signature-canvas-zwb.svg)](https://npmjs.org/package/react-signature-canvas-zwb)
[![dw](https://img.shields.io/npm/dw/react-signature-canvas-zwb.svg)](https://npmjs.org/package/react-signature-canvas-zwb)
<br><!-- status / activity -->
[![build status](https://img.shields.io/travis/zwb474287221/react-signature-canvas-zwb/master.svg)](https://travis-ci.org/agilgur5/react-signature-canvas-zwb)
[![code coverage](https://img.shields.io/codecov/c/gh/zwb474287221/react-signature-canvas-zwb/master.svg)](https://codecov.io/gh/agilgur5/react-signature-canvas-zwb)
<br>
[![NPM](https://nodei.co/npm/react-signature-canvas-zwb.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/react-signature-canvas-zwb)
<br>

## Installation

`npm i -S react-signature-canvas-zwb`

or

`yarn add react-signature-canvas-zwb`
## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Canvas from 'react-signature-canvas-zwb'

ReactDOM.render(
  <Canvas width={width} height={height} strokeStyle={'red'} lineWidth={3}/>,
  document.getElementById('react-container')
)
```

### Props

- `style` : `object`, default: `0.7`
- `width` : `number`, default: `100`
- `height` : `number`, default: `100`
- `strokeStyle`: `string`, default: `5`
- `lineWidth` : `number` or `function`,

### API

All API methods require a ref to the Canvas in order to use and are instance methods of the ref.

```javascript
<Canvas ref={(ref) => { this.sigCanvas = ref }} />
```

- `clear()` : `void`, clears the canvas using the `backgroundColor` prop
- `getPic(mimetype, encoderOptions)`: `base64string`, returns the signature image as a data URL

## Example

You can interact with the example in a few different ways:

1. Run `npm start` and navigate to [http://localhost:8080/](http://localhost:8080/).<br>
Hosted locally via the [`example/`](example/) directory
