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
export const getImageSrcSet = (
  imageUrl: string,
  useSrcSet = true
): ImageSet | never => {
  const lastDotIndex = imageUrl.lastIndexOf('.');
  if (lastDotIndex < 0) {
    throw new Error('[getImageSrcSet] imageUrl parameter has no extension');
  }

  const path = imageUrl.slice(0, lastDotIndex);
  const ext = (imageUrl.slice(lastDotIndex + 1) || '').trim();
  if (!ext) {
    throw new Error('[getImageSrcSet] invalid imageUrl parameter');
  }

  if (['gif', 'jpg', 'png', 'webp'].includes(ext)) {
    const srcSet = useSrcSet
      ? `${`${path}.${ext}`} 1x, ${`${path}@2x.${ext}`} 2x, ${`${path}@3x.${ext}`} 3x`
      : undefined;

    return { src: imageUrl, srcSet };
  }

  return { src: imageUrl };
};
