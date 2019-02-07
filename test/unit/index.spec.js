import {
  arrayIntersection,
  isArray,
  isArrayEqual,
  isFloat,
  isFunction,
  isInt,
  isJson,
  isNumber,
  isObject,
  isString,
  niceBytes,
  onlyNumbers,
  percentage,
  quickHash,
  randomNumber
} from '../../src';

describe('arrayIntersection', () => {
  it('should be [1]', () => {
    expect(arrayIntersection([1], [1, 2])).toEqual([1]);
  });

  it('should be empty', () => {
    expect(arrayIntersection([1], [2])).toEqual([]);
  });
});

describe('isArray', () => {
  it('should be an array', () => {
    expect(isArray([1])).toBe(true);
    expect(isArray([])).toBe(true);
  });

  it('should not be an array', () => {
    expect(isArray()).toBe(false);
  });
});

describe('isArrayEqual', () => {
  it('should equal', () => {
    expect(isArrayEqual([1], [1])).toBe(true);
  });

  it('should not be equal', () => {
    expect(isArrayEqual([1], [2])).toBe(false);
  });
});

describe('isFloat', () => {
  it('should be a float', () => {
    expect(isFloat(0.01)).toBe(true);
  });

  it('should not be a float', () => {
    expect(isFloat('0.01')).toBe(false);
  });
});

describe('isFunction', () => {
  it('should be a function', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(_ => {})).toBe(true);
  });

  it('should not be a function', () => {
    expect(isFunction('')).toBe(false);
  });
});

describe('isInt', () => {
  it('should be an integer', () => {
    expect(isInt(1)).toBe(true);
    expect(isInt(-1)).toBe(true);
  });

  it('should not be an integer', () => {
    expect(isInt('1')).toBe(false);
    expect(isInt(1.01)).toBe(false);
  });
});

describe('isJson', () => {
  it('should be a json', () => {
    expect(isJson({})).toBe(true);
    expect(isJson({ a: 1 })).toBe(true);
    expect(isJson([])).toBe(true);
    expect(isJson([1])).toBe(true);
  });

  it('should not be a json', () => {
    expect(isJson('1')).toBe(false);
  });
});

describe('isNumber', () => {
  it('should be a number', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
  });

  it('should not be a json', () => {
    expect(isNumber()).toBe(false);
    expect(isNumber('1.1')).toBe(false);
  });
});

describe('isObject', () => {
  it('should be an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject([1])).toBe(true);
  });

  it('should not be an object', () => {
    expect(isObject(null)).toBe(false);
  });
});

describe('isString', () => {
  it('should be a string', () => {
    expect(isString('')).toBe(true);
    expect(isString('1')).toBe(true);
  });

  it('should not be a string', () => {
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
  });
});

describe('niceBytes', () => {
  it('should be in KB', () => {
    expect(niceBytes(1000000)).toBe('976.56 KB');
  });
});

describe('onlyNumbers', () => {
  it('should be only in numbers', () => {
    expect(onlyNumbers(1000000)).toBe(1000000);
    expect(onlyNumbers('123abc_$.qwr')).toBe('123');
  });

  it('should return null', () => {
    expect(onlyNumbers(null)).toBe(null);
  });
});

describe('percentage', () => {
  it('should be 50', () => {
    expect(percentage(1, 2)).toBe(50);
    expect(percentage('1', '2')).toBe(50);
  });
});

describe('quickHash', () => {
  it('they should be equal', () => {
    expect(quickHash('abc')).toBe(quickHash('abc'));
  });
});

describe('randomNumber', () => {
  it('should be a number', () => {
    expect(randomNumber()).toBeGreaterThan(10);
  });
});
