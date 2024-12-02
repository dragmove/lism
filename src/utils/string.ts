/**
 * Get the file extension from a given file name.
 *
 * @param {string} fileName - The name of the file including its extension.
 * @returns {string} The file extension (e.g., 'png', 'jpg', 'svg').
 * @throws {Error} Throws an error if the file name has no extension or is invalid.
 * @example
 * console.log(getFileExtension('image.png')); // png
 * console.log(getFileExtension('document.pdf')); // pdf
 * console.log(getFileExtension('archive.tar.gz')); // gz
 */
export const getFileExtension = (fileName: string): string | never => {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex < 0) {
    throw new Error('[getFileExtension] fileName parameter has no extension');
  }

  const ext = (fileName.slice(lastDotIndex + 1) || '').trim();
  if (!ext) {
    throw new Error('[getFileExtension] invalid fileName parameter');
  }

  return ext;
};
