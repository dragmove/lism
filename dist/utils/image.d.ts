type ImageSet = {
    srcSet?: string;
    src: string;
};
/**
 * get file extension
 *
 * @function getImageSrcSet
 * @param {String} imageUrl
 * @param {Boolean} useSrcSet
 * @returns {ImageSet | never}
 * @example
 * console( getImageSrcSet('/path/image.png') )
 */
export declare const getImageSrcSet: (imageUrl: string, useSrcSet?: boolean) => ImageSet | never;
export {};
