export const isImageUrl = (url: string): boolean => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff'];

  const extension = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();

  return imageExtensions.includes(`.${extension}`);
};

export const isVideoUrl = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.mov', '.wmv', '.avi', '.mkv', '.flv', '.webm'];

  const extension = url.slice((url.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();

  return videoExtensions.includes(`.${extension}`);
};
