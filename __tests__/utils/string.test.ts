import { getFileExtension } from '@lism-internal/utils/string';

describe('getFileExtension', () => {
  it('when fileName is empty string, throw Error', () => {
    expect(() => {
      getFileExtension('');
    }).toThrow(Error);
  });

  it('when fileName has no extension, throw Error', () => {
    expect(() => {
      getFileExtension('image');
    }).toThrow(Error);
  });

  it('when fileName is invalid, throw Error', () => {
    expect(() => {
      getFileExtension('image.png.');
    }).toThrow(Error);

    expect(() => {
      getFileExtension('image.png . ');
    }).toThrow(Error);
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

  it('input " image.jpg ", return "jpg"', () => {
    expect(getFileExtension(' image.jpg ')).toEqual('jpg');
  });
});
