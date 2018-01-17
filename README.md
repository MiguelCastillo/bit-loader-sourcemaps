# bit-loader-sourcemaps

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-sourcemaps.svg)](https://greenkeeper.io/)[![Build Status](https://travis-ci.org/MiguelCastillo/bit-loader-sourcemaps.svg?branch=greenkeeper%2Finitial)](https://travis-ci.org/MiguelCastillo/bit-loader-sourcemaps)

bit-bundler plugin for initializing source maps.


## Examples

The example below illustrates how `bit-loader-sourcemaps` generates source maps that are then consumed by two other plugins, which successfully merge source maps that they generate.

``` javascript
module.exports = {
  loader: [
    "bit-loader-sourcemaps",
    "bit-loader-babel",
    "bit-loader-builtins"
  ]
};
```
