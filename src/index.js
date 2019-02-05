/**
 * Author: Ganesh Rathinavel
 * License: MIT
 * Repo URL: https://github.com/ganeshrvel/npm-nice-utils
 * Contacts: ganeshrvel@outlook.com
 */

/**
 * Checks whether a given variable is undefined or null
 * @param obj
 * @returns {boolean}
 */
export const undefinedOrNull = obj => {
  return typeof obj === 'undefined' || obj === null;
};

/**
 *  Checks whether a given nested object or array is undefined or null
 *
 * @param mainObj: object or array
 * @param key: string
 * @returns {boolean}
 */
export const undefinedOrNullChained = (mainObj, key = null) => {
  let _return = undefined;

  if (undefinedOrNull(mainObj)) {
    return _return;
  }

  if (
    !key ||
    (Object.prototype.toString.call(key) !== '[object String]' &&
      key.trim() === '')
  ) {
    return _return;
  }

  const keyArray = key.split('.');

  if (!keyArray || keyArray.length < 1) {
    return _return;
  }
  let temp = mainObj;

  keyArray.map(a => {
    if (typeof temp !== 'undefined') {
      const _matches = a.match(/[^[\]]+(?=])/g);

      if (_matches && _matches.length > 0) {
        let aSplits = a.split('[')[0],
          lTemp = temp[aSplits];

        _matches.map(e => {
          if (typeof lTemp !== 'undefined' && typeof lTemp[e] !== 'undefined') {
            return (lTemp = lTemp[e]);
          }
          lTemp = undefined;
        });
        return (temp = lTemp);
      } else if (typeof temp[a] !== 'undefined') {
        return (temp = temp[a]);
      }
    }

    temp = _return;
  });

  return typeof temp !== 'undefined' ? temp : _return;
};

/**
 * Checks whether the given variable is a function
 *
 * @param fn
 * @returns {boolean}
 */
export const isFunction = fn => {
  const getType = {};
  return fn && getType.toString.call(fn) === '[object Function]';
};

/**
 * Checks whether the input variable is an Array
 *
 * @param arr
 * @returns {boolean}
 */
export const isArray = arr => {
  if (typeof Array.isArray === 'undefined') {
    Array.isArray = arr => {
      return Object.prototype.toString.call(arr) === '[object Array]';
    };
  }

  return Array.isArray(arr);
};

/**
 * Checks whether the input variable is an Object
 *
 * @param obj
 * @returns {boolean}
 */
export const isObject = obj => {
  if (obj === null) {
    return false;
  }
  return typeof obj === 'function' || typeof obj === 'object';
};

/**
 * Checks whether the input variable is an String
 *
 * @param str
 * @returns {boolean}
 */
export const isString = str => {
  return Object.prototype.toString.call(str) !== '[object String]';
};

/**
 * Checks whether the variable is a JSON Object
 *
 * @param obj
 * @returns {boolean}
 */
export const isJSON = obj => {
  if (typeof obj !== 'string') {
    obj = JSON.stringify(obj);
  }

  try {
    const o = JSON.parse(obj);
    if (o && typeof o === 'object') {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
};

/**
 * Checks whether the device is touch enabled
 *
 * @returns {boolean}
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
};

/**
 * Checks whether the device is iOS
 *
 * @returns {boolean}
 */
export const isiOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Wait for an image to load.
 * @param src
 * @returns {Promise}
 */
export const isImageLoaded = src => {
  // eslint-disable-next-line compat/compat
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ src: src, status: 'ok' });
    img.onerror = () => resolve({ src: src, status: 'error' });

    img.src = src;
  });
};

/**
 * Wait for a DOM element to load.
 *
 * @param selector: eg: input#id
 * @param time, time interval
 * @returns Promise
 */
export const isElementLoaded = (selector, time = 500) => {
  // eslint-disable-next-line compat/compat
  return new Promise((resolve, reject) => {
    if (typeof selector === 'undefined' || selector === null) {
      return reject(null);
    }

    let _interval = setInterval(() => {
      if (document.querySelector(selector) != null) {
        clearInterval(_interval);
        return resolve(document.querySelector(selector));
      }
    }, time);
  });
};

/**
 * Replace all occurrences of a sub-string
 * @param str
 * @param find
 * @param replace
 * @returns {string}
 */
export const replaceAll = (str, find, replace) => {
  return str.replace(
    new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi'),
    replace
  );
};

/**
 * Return numeric value from the input string
 * @param number
 * @param allowDecimal
 * @param pattern
 * @returns {*}
 */
export const onlyNumbers = (
  number = null,
  allowDecimal = false,
  pattern = /[^1-9]/g
) => {
  if (!isNaN(number)) {
    return number;
  }
  if (allowDecimal) {
    pattern = /[^1-9.]/g;
  }

  return number.replace(new RegExp(pattern, 'gi'), '');
};

/**
 * Strip a character beginning and end of the string
 *
 * @param string
 * @param search
 * @returns {string}
 */
export const rtrim = (string, search = '') => {
  string = string.toString();
  if (typeof string === 'undefined' || string === null) {
    return '';
  }
  if (search === '') {
    return string.trim();
  }
  const regex = new RegExp('^' + search + '+|' + search + '+$', 'g');
  return string.replace(regex, '').trim();
};

/**
 * Array to Object
 * @param arr
 * @returns {{}}
 */
export const toObject = arr => {
  if (undefinedOrNull(arr) || arr.length < 1) {
    return {};
  }
  const k = {};
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== undefined) {
      k[i] = arr[i];
    }
  }
  return k;
};

/**
 * Find the percentage of two numbers
 *
 * @param current
 * @param total
 * @returns {number}
 */
export const percentage = (current, total) => {
  return parseInt((current / total) * 100, 10);
};

/**
 * Generates a lengthy random number
 * @returns {number}
 */
export const randomNumber = () => {
  return Math.floor(Math.random() * Date.now()) + Date.now();
};

/**
 * Truncate a string
 *
 * @param str
 * @param length
 * @returns {string}
 */
export const truncate = (str, length) => {
  const dots = str.length > length ? '...' : '';
  return str.substring(0, length) + dots;
};

/**
 * Get/Manipulate URL, URI parameters or hashes.
 *
 * get: returns parameter(s) in a url as an object; if url is empty current url is considered; if param is empty all url parameters are returned as an object
 * getUrlWithoutHash: strips hash and return url; if url is empty current url is considered;
 * getHash: returns the hash value of an url as an object; if url is empty current url is considered;
 * parseHash: parses and returns multiple hash values of an url as an object; if url is empty current url is considered; if param is empty all url parameters are returned as an object
 * removeHash: remove hash from the address bar url
 * getUrlPath: get url location pathname
 *
 * @param url
 * @returns {*}
 */
export const urls = (url = '') => {
  return {
    get(param = '') {
      const data = {};
      if (undefinedOrNull(url) || url === '') {
        url = window.location.href;
      }

      url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        data[key] = decodeURI(value);
      });

      if (param === '') {
        return data;
      }
      if (typeof data[param] === 'undefined') {
        return null;
      }
      return data[param];
    },

    getUrlWithoutHash() {
      if (undefinedOrNull(url) || url === '') {
        return window.location.href.split('#')[0];
      }

      const hash = url.split('#')[0];
      if (hash) {
        return hash;
      }
      return null;
    },

    getHash() {
      if (undefinedOrNull(url) || url === '') {
        return location.hash.replace('#', '').trim();
      }

      const hash = url.split('#')[1];
      if (hash) {
        return hash;
      }
      return null;
    },

    parseHash(param) {
      const _url = undefinedOrNull(url) && url !== '' ? url : '';

      let hash = urls().getHash(_url);
      if (hash === '') {
        return null;
      }

      const pieces = hash.split('&');
      const data = {};
      let parts;

      for (let i = 0; i < pieces.length; i += i) {
        parts = pieces[i].split('=');
        if (parts.length < 2) {
          parts.push('');
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
      }
      if (param === '') {
        return data;
      }

      if (typeof data[param] === 'undefined') {
        return null;
      }

      return data[param];
    },

    removeHash() {
      window.location.replace('#');
    },

    getUrlPath() {
      return window.location.pathname;
    }
  };
};

/**
 * Change the url hash in the address bar and push the same into the browser history
 *
 * @param param
 */
export const changeURLHash = param => {
  if (param === 'undefined' || param == null) {
    param = '';
  } else {
    param = '#' + param;
  }
  let scrollV = 0;
  let scrollH = 0;
  let loc = window.location;

  if ('pushState' in history) {
    history.pushState('', document.title, loc.pathname + loc.search + param);
  } else {
    scrollV = document.body.scrollTop;
    scrollH = document.body.scrollLeft;
    loc.hash = param;
    document.body.scrollTop = scrollV;
    document.body.scrollLeft = scrollH;
  }
};

/**
 * URL Sanitize
 * Encodes and decodes url parameters
 * @param str
 * @returns {{encode: string, decode: string}}
 */
export const urlSanitize = (str = '') => {
  if (undefinedOrNull(str)) {
    str = '';
  }

  return {
    encode: encodeURIComponent(str.replace(/\\\//g, '')).replace(/%20/g, '+'),
    decode: decodeURIComponent(str.replace(/\+/g, '%20'))
  };
};

/**
 * Sanitizes the html tags by escaping the html tags
 *
 * @param str
 * @returns {{escape: string, unescape: string}}
 */
export const htmlSanitize = (str = '') => {
  return {
    escape: str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;'),

    unescape: str
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
  };
};

/**
 * Strip HTML Tags from an input string
 * @param input; string
 * @param allowed; <img> or <span><body>
 * @returns {string}
 */
export const stripTags = (input = '', allowed = '') => {
  allowed = (
    ((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
  ).join('');
  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};

/**
 * Get the actual width of an element; It takes the styles of its children into consideration;
 * Total width: width + margin - padding + border
 * @param selector => id or class name
 * @returns {*}
 */
export const netElementWidth = selector => {
  if (
    undefinedOrNull(selector) ||
    undefinedOrNull(document) ||
    undefinedOrNull(window)
  ) {
    return null;
  }

  const elem = document.querySelectorAll(selector);
  let total = 0;

  elem &&
    Object.keys(elem).length > 0 &&
    Object.keys(elem).forEach(i => {
      const style = elem[i].currentStyle || window.getComputedStyle(elem[i]);
      const width = elem[i].offsetWidth;
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      const padding =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const border =
        parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

      total += width + margin - padding + border;
    });

  return total;
};
