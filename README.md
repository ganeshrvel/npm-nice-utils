# npm: nice-utils

- Author: [Ganesh Rathinavel](https://www.linkedin.com/in/ganeshrvel "Ganesh Rathinavel")
- License: [MIT](https://github.com/ganeshrvel/openmtp/blob/master/LICENSE "MIT")
- Website URL: [https://github.com/ganeshrvel/npm-nice-utils](https://github.com/ganeshrvel/npm-nice-utils/ "https://github.com/ganeshrvel/npm-nice-utils")
- Repo URL: [https://github.com/ganeshrvel/npm-nice-utils](https://github.com/ganeshrvel/npm-nice-utils/ "https://github.com/ganeshrvel/npm-nice-utils")
- Contacts: ganeshrvel@outlook.com

### Introduction

##### A collection of useful utilities for the browser and node.js environments.

## Installation

```shell
$ npm install nice-utils

or 

$ yarn add nice-utils
```

## Usage
```javascript
// Import ES6 way

import {
  arrayIntersection,
  changeURLHash,
  htmlSanitize,
  isArray,
  isArrayEqual,
  isElementLoaded,
  isFloat,
  isFunction,
  isImageLoaded,
  isInt,
  isIos,
  isJson,
  isNumber,
  isObject,
  isString,
  isTouchDevice,
  netElementWidth,
  niceBytes,
  onlyNumbers,
  percentage,
  quickHash,
  randomNumber,
  replaceAll,
  replaceBulk,
  rtrim,
  splitIntoLines,
  springTruncate,
  stripTags,
  toObject,
  truncate,
  undefinedOrNull,
  undefinedOrNullChained,
  urlSanitize,
  urls
} from 'nice-utils';

// Import ES2015 way
const niceUtils = require('nice-utils')	
```

## Methods Overview

- arrayIntersection - Intersect common elements of two arrays

```javascript
arrayIntersection([1], [1, 2]);

//output: [1]
```

- isArray - Checks whether the input is an Array

```javascript
isArray([1]);

//output: true
```

- isArrayEqual - Checks whether the inputted arrays are equal

```javascript
isArrayEqual([1], [1]);

//output: true
```

- isElementLoaded - Wait for a DOM element to load

```javascript
//Example:
isElementLoaded(
  '#id', //selector
  200 //timeout (optional)
).
then(response => {
  console.log(`The element was successfully loaded into the DOM`);
}).
catch(e => {
  console.error(e);
});
```


- isImageLoaded - Wait for an image to load.

```javascript
isImageLoaded(
    'https://sample-videos.com/img/Sample-jpg-image-500kb.jpg').
then(res => {
  console.log(`Success`);
  
  const img = document.createElement('img');
  img.src = res.src;
  parentSelector.appendChild(img);
}).
catch(e => {
  console.error(`Error`);
});
```

##### Rest of the documentation shall be updated very soon. In the mean time please find the methods and usage information from [src/index.js](https://github.com/ganeshrvel/npm-nice-utils/blob/master/src/index.js "src/index.js")


## Building from Source

Requirements: [Node.js v6+](https://nodejs.org/en/download/ "Install Node.js"), [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Install Git") and [npm](https://www.npmjs.com/get-npm "Install Node package manager")


### Clone
```shell
$ git clone --depth 1 --single-branch --branch master https://github.com/ganeshrvel/npm-nice-utils.git

$ cd npm-nice-utils
```

### Contribute
- Fork the repo and create your branch from master.
- Ensure that the changes pass linting.
- Update the documentation if needed.
- Make sure your code lints.
- Issue a pull request!

When you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/ganeshrvel/npm-nice-utils/blob/master/LICENSE "MIT License") that covers the project. Feel free to contact the maintainers if that's a concern.


### Buy me a coffee
Help me keep the app FREE and open for all.
Paypal me: [paypal.me/ganeshrvel](https://paypal.me/ganeshrvel "paypal.me/ganeshrvel")

### Contacts
Please feel free to contact me at ganeshrvel@outlook.com

### More repos
- [Electron React Redux Advanced Boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "Electron React Redux Advanced Boilerplate")
- [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS")
- [Tutorial Series by Ganesh Rathinavel](https://github.com/ganeshrvel/tutorial-series-ganesh-rathinavel "Tutorial Series by Ganesh Rathinavel")

### License
nice-utils | A collection of useful utilities for the browser and node.js environments is released under [MIT License](https://github.com/ganeshrvel/npm-nice-utils/blob/master/LICENSE "MIT License").

Copyright © 2018-Present Ganesh Rathinavel
