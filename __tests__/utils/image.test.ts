import { getImageSrcSet } from '@utils/image';

describe('getImageSrcSet()', () => {
  test('when imageUrl is empty string, throw Error', () => {
    expect(() => {
      getImageSrcSet('');
    }).toThrowError(Error);
  });

  test('when imageUrl has no extension, throw Error', () => {
    expect(() => {
      getImageSrcSet('image');
    }).toThrowError(Error);
  });

  test('when imageUrl is invalid, throw Error', () => {
    expect(() => {
      getImageSrcSet('image.png.');
    }).toThrowError(Error);

    expect(() => {
      getImageSrcSet('image.png . ');
    }).toThrowError(Error);
  });

  it(`getImageSrcSet('image.png', false) return { 
    src: 'image.png',
  }`, () => {
    expect(getImageSrcSet('image.png', false)).toEqual({
      src: 'image.png',
    });
  });

  it(`input 'image.png', return { 
    src: 'image.png',
    srcSet: 'image.png 1x, image@2x.png 2x, image@3x.png 3x',
  }`, () => {
    expect(getImageSrcSet('image.png')).toEqual({
      src: 'image.png',
      srcSet: 'image.png 1x, image@2x.png 2x, image@3x.png 3x',
    });
  });

  it(`input '/path/image.png', return {
    src: '/path/image.png',
    srcSet: '/path/image.png 1x, /path/image@2x.png 2x, /path/image@3x.png 3x',
  }`, () => {
    expect(getImageSrcSet('/path/image.png')).toEqual({
      src: '/path/image.png',
      srcSet: '/path/image.png 1x, /path/image@2x.png 2x, /path/image@3x.png 3x',
    });
  });

  it(`input 'https://www.test.com/path/image.png', return {
    src: 'https://www.test.com/path/image.png',
    srcSet: 'https://www.test.com/path/image.png 1x, https://www.test.com/path/image@2x.png 2x, https://www.test.com/path/image@3x.png 3x',
  }`, () => {
    expect(getImageSrcSet('https://www.test.com/path/image.png')).toEqual({
      src: 'https://www.test.com/path/image.png',
      srcSet:
        'https://www.test.com/path/image.png 1x, https://www.test.com/path/image@2x.png 2x, https://www.test.com/path/image@3x.png 3x',
    });
  });
});
