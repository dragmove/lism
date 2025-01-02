import { deepFreeze, get, isDefined, pipe } from '@utils/common';

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

describe('get', () => {
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

  it('input an object and key, return a property value', () => {
    expect(get(obj, 'a')).toEqual(1);
    expect(get(obj, 'b')).toEqual('foo');
    expect(get(obj.c, 'ca')).toEqual(1);
    expect(get(obj.c.cc, 'ccc')).toEqual({});
  });
});

describe('pipe', () => {
  beforeEach(() => {});

  it('input a function, return a function', () => {
    expect(typeof pipe((value: number) => value)).toEqual('function');
  });

  it('input functions, return a function', () => {
    expect(
      typeof pipe(
        (value: number) => value,
        (value: number) => value
      )
    ).toEqual('function');
  });

  it('called with a parameter, return value that reduced', () => {
    const pipedA = pipe((a: number) => a + 1);
    expect(pipedA(1)).toEqual(2);

    const pipedB = pipe(
      (a: number) => a,
      (b: number) => b + 99
    );
    expect(pipedB(1)).toEqual(100);
  });
});
