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
export declare const getFileExtension: (fileName: string) => string | never;
