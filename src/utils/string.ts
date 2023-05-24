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

  return fileName.substring(lastDotIndex + 1);
};
