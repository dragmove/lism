import { getFileExtension } from '@utils/string';

describe('getFileExtension()', () => {
  test('when fileName is empty string, throw Error', () => {
    expect(() => {
      getFileExtension('');
    }).toThrow(Error);
  });

  test('when fileName has no extension, throw Error', () => {
    expect(() => {
      getFileExtension('image');
    }).toThrow(Error);
  });

  test('when fileName is invalid, throw Error', () => {
    expect(() => {
      getFileExtension('image.png.');
    }).toThrow(Error);

    expect(() => {
      getFileExtension('image.png . ');
    }).toThrow(Error);
  });

  test('input "image.png", return "png"', () => {
    expect(getFileExtension('image.png')).toEqual('png');
  });

  test('input "image.jpg", return "jpg"', () => {
    expect(getFileExtension('image.jpg')).toEqual('jpg');
  });

  test('input "image.js.jpg", return "jpg"', () => {
    expect(getFileExtension('image.js.jpg')).toEqual('jpg');
  });

  test('input " image.jpg ", return "jpg"', () => {
    expect(getFileExtension(' image.jpg ')).toEqual('jpg');
  });
});
