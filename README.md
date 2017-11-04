<h1 align="center">r2s3sign</h1>

<div align="center">
  <strong></strong>
</div>

<br />

<div align="center">
  <!-- NPM version -->
  <a href="https://npmjs.org/package/r2s3sign" target="_blank">
    <img src="https://img.shields.io/npm/v/r2s3sign.svg" alt="NPM version" />
  </a>
  <!-- License -->
  <a href="https://npmjs.org/package/r2s3sign" target="_blank">
    <img src="https://img.shields.io/npm/l/r2s3sign.svg" alt="License" />
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/r2s3sign" target="_blank">
    <img src="https://img.shields.io/npm/dt/r2s3sign.svg" alt="Downloads" />
  </a>
  <!-- Downloads Month -->
  <a href="https://npmjs.org/package/r2s3sign" target="_blank">
    <img src="https://img.shields.io/npm/dm/r2s3sign.svg" alt="Downloads Month" />
  </a>
  <!-- Travis CI -->
  <a href="https://travis-ci.org/r2js/r2s3sign" target="_blank">
    <img src="https://img.shields.io/travis/r2js/r2s3sign.svg" alt="Travis CI" />
  </a>
  <!-- Dependencies -->
  <a href="https://david-dm.org/r2js/r2s3sign" target="_blank">
    <img src="https://img.shields.io/david/r2js/r2s3sign.svg" alt="Dependencies" />
  </a>
  <!-- Codeclimate -->
  <a href="https://codeclimate.com/github/r2js/r2s3sign" target="_blank">
    <img src="https://img.shields.io/codeclimate/github/r2js/r2s3sign.svg" alt="Codeclimate" />
  </a>
  <!-- Github Stars -->
  <a href="https://github.com/r2js/r2s3sign" target="_blank">
    <img src="https://img.shields.io/github/stars/r2js/r2s3sign.svg?label=%E2%98%85" alt="Github Stars" />
  </a>
</div>

<br />

## Usage

```js
const r2load = require('r2load');
const loader = r2load();
const app = {};
loader
  .load('model')
  .load('controller')
  .load('service')
  .into(app);

/*
{
  services: {
    'model/users': ...,
    'controller/users': ...,
    'service/users': ...,
  }
}
*/
```

## Installation

```bash
$ npm install r2load
```
