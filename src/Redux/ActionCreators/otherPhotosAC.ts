import { fetchMainPhotosStartACT, fetchMainPhotosSuccessACT, homeAT } from "../../Types/homePageT";

export const fetchOtherPhotosStartAC = (): fetchMainPhotosStartACT => ({
  type: homeAT.FETCH_MAIN_PHOTOS_START,
});
export const fetchOtherPhotosSuccessAC = (photos: Array<string>): fetchMainPhotosSuccessACT => {
  return {
    type: homeAT.FETCH_MAIN_PHOTOS_SUCCESS,
    photos,
  };
};
// export const fetchAlbumErrorAC = (error: string): fetchAlbumErrorACT => ({
//   type: photosAT.FETCH_ALBUM_ERROR,
//   error,
// });
