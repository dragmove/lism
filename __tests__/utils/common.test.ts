import { deepFreeze, isDefined, isError } from '@lism-internal/utils/common';

describe('isDefined', () => {
  const testCases = [
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: false, expected: true },
    { input: true, expected: true },
    { input: 0, expected: true },
    { input: '', expected: true },
    { input: {}, expected: true },
    { input: () => ({}), expected: true },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`input ${JSON.stringify(input)}, return ${expected}`, () => {
      expect(isDefined(input)).toEqual(expected);
    });
  });
});

describe('isError', () => {
  class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'CustomError';
    }
  }

  class SubCustomError extends CustomError {}

  it('should return false for undefined', () => {
    expect(isError(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isError(null)).toBe(false);
  });

  it('should return false for a string', () => {
    expect(isError('An error occurred')).toBe(false);
  });

  it('should return false for a number', () => {
    expect(isError(123)).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isError([])).toBe(false);
  });

  it('should return false for an empty object', () => {
    expect(isError({})).toBe(false);
  });

  it('should return false for a non-error object', () => {
    const obj = { message: 'Not an error' };
    expect(isError(obj)).toBe(false);
  });

  it('should return true for an instance of a specific error type', () => {
    const customError = new CustomError('A custom error occurred');
    expect(isError(customError, CustomError)).toBe(true);

    const typeError = new TypeError('A type error occurred');
    expect(isError(typeError, TypeError)).toBe(true);

    const syntaxError = new SyntaxError('A syntax error occurred');
    expect(isError(syntaxError, SyntaxError)).toBe(true);
  });

  it('should return false when checking against a non-constructor type', () => {
    const customError = new CustomError('A custom error occurred');
    expect(isError(customError, 'NotAConstructor' as any)).toBe(false);
  });

  it('should return true for a subclass of a custom error', () => {
    const subError = new SubCustomError('A subclass error occurred');
    expect(isError(subError, SubCustomError)).toBe(true);
    expect(isError(subError, CustomError)).toBe(true);
    expect(isError(subError, Error)).toBe(true);
  });

  it('should return false for modified prototype objects', () => {
    const fakeError = Object.create(null);
    expect(isError(fakeError)).toBe(false);
  });

  it('should return true for an instance of Error', () => {
    const error = new Error('An error occurred');
    expect(isError(error)).toBe(true);
  });

  it('should return true for an instance of EvalError', () => {
    const evalError = new EvalError('An eval error occurred');
    expect(isError(evalError)).toBe(true);
  });

  it('should return true for an instance of RangeError', () => {
    const rangeError = new RangeError('A range error occurred');
    expect(isError(rangeError)).toBe(true);
  });

  it('should return true for an instance of ReferenceError', () => {
    const referenceError = new ReferenceError('A reference error occurred');
    expect(isError(referenceError)).toBe(true);
  });

  it('should return true for an instance of SyntaxError', () => {
    const syntaxError = new SyntaxError('A syntax error occurred');
    expect(isError(syntaxError)).toBe(true);
  });

  it('should return true for an instance of TypeError', () => {
    const typeError = new TypeError('A type error occurred');
    expect(isError(typeError)).toBe(true);
  });

  it('should return true for an instance of URIError', () => {
    const uriError = new URIError('A URI error occurred');
    expect(isError(uriError)).toBe(true);
  });

  it('should return true for an instance of CustomError', () => {
    const customError = new CustomError('A custom error occurred');
    expect(isError(customError)).toBe(true);
  });
});

describe('deepFreeze', () => {
  const sampleObj: any = {
    a: 1,
    b: 'foo',
    c: {
      ca: 1,
      cb: 'foo',
      cc: {
        cca: 1,
        ccb: 'foo',
        ccc: {},
      },
    },
  };
  let obj: any = null;

  beforeEach(() => {
    obj = Object.assign({}, sampleObj);
  });

  it('input an object, return a frozen object', () => {
    const frozen = deepFreeze(obj);

    expect(deepFreeze(frozen)).toEqual(obj);

    expect(() => {
      frozen.c = 99;
    }).toThrowError();

    expect(() => {
      delete frozen.c.cc;
    }).toThrowError();

    expect(() => {
      frozen.c.cc.ccc = null;
    }).toThrowError();
  });
});
