'use strict';

import {
  isTouchDevice,
  isiOS,
  isImageLoaded,
  isElementLoaded,
  urls,
  changeURLHash,
  netElementWidth
} from '../../src';

console.log(`isTouchDevice:`, isTouchDevice());

console.log(`isiOS:`, isiOS());

isImageLoaded('https://sample-videos.com/img/Sample-jpg-image-500kb.jpg')
  .then(res => {
    console.log(`isImageLoaded:`, res);
    return res;
  })
  .catch(e => {
    console.error(e);
  });

isElementLoaded('body')
  .then(res => {
    console.log(`isElementLoaded:`, res);
    return res;
  })
  .catch(e => {
    console.error(e);
  });

console.log(`urls.get:`, urls().get());
console.log(`urls.get with params arg set:`, urls().get('testparam1'));
console.log(
  `urls.get with test url:`,
  urls('http://www.google.com/?googletest1=1&googletest2=2&googletest3').get()
);
console.log(
  `urls.get with test url and params arg set:`,
  urls('http://www.google.com/?googletest1=1&googletest2=2&googletest3').get(
    'googletest1'
  )
);

console.log(`urls.getUrlWithoutHash:`, urls().getUrlWithoutHash());
console.log(
  `urls.getUrlWithoutHash with test url:`,
  urls(
    'http://www.google.com/?googletest1=1&googletest2=2&googletest3#hashtest'
  ).getUrlWithoutHash()
);

console.log(`urls.getHash:`, urls().getHash());
console.log(
  `urls.getHash with test url:`,
  urls('http://www.google.com/#googlehashtest=1').getHash()
);

console.log(`urls.parseHash:`, urls().parseHash());
console.log(
  `urls.parseHash with params arg set:`,
  urls().parseHash('testhash2')
);
console.log(
  `urls.parseHash with test url:`,
  urls('http://www.google.com/#googlehashtest=1').parseHash()
);
console.log(
  `urls.parseHash with test url and params arg set:`,
  urls('http://www.google.com/#googlehashtest1=1&googlehashtest3=3').parseHash(
    'googlehashtest3'
  )
);

console.log(`urls.removeHash:`, urls().removeHash());

console.log(`urls.getUrlPath:`, urls().getUrlPath());

console.log(`changeURLHash:`, changeURLHash('new-hash'));

console.log(`netElementWidth:`, netElementWidth('body'));
