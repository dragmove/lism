import { getFileExtension } from '@utils/string';

describe('getFileExtension()', () => {
  it('when fileName is empty string, throw Error', () => {
    expect(() => {
      getFileExtension('');
    }).toThrowError(Error);
  });

  it('when fileName has no extension, throw Error', () => {
    expect(() => {
      getFileExtension('image');
    }).toThrowError(Error);
  });

  it('when fileName is invalid, throw Error', () => {
    expect(() => {
      getFileExtension('image.png.');
    }).toThrowError(Error);

    expect(() => {
      getFileExtension('image.png . ');
    }).toThrowError(Error);
  });

  it('input "image.png", return "png"', () => {
    expect(getFileExtension('image.png')).toEqual('png');
  });

  it('input "image.jpg", return "jpg"', () => {
    expect(getFileExtension('image.jpg')).toEqual('jpg');
  });

  it('input "image.js.jpg", return "jpg"', () => {
    expect(getFileExtension('image.js.jpg')).toEqual('jpg');
  });
});
