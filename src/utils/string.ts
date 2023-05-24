/**
 * get file extension(png, jpg, svg, webp, etc..)
 *
 * @function getFileExtension
 * @param {String} fileName
 * @returns {String}
 * @example
 * console.log( getFileExtension('image.png') ); // png
 */
export const getFileExtension = (fileName: string): string | never => {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex < 0) {
    throw new Error('[getFileExtension] fileName parameter has no extension');
  }

  const extension = (fileName.slice(lastDotIndex + 1) || '').trim();
  if (!extension) {
    throw new Error('[getFileExtension] invalid fileName parameter');
  }

  return extension;
};
