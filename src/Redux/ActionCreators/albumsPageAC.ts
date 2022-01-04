import {
  fetchAlbumErrorACT,
  fetchAlbumStartACT,
  fetchAlbumSuccessACT,
  photosAT,
} from "../../Types/albumsPageT";

export const fetchAlbumStartAC = (): fetchAlbumStartACT => ({ type: photosAT.FETCH_ALBUM_START });
export const fetchAlbumSuccessAC = (album: Array<string>, name: string): fetchAlbumSuccessACT => {
  return {
    type: photosAT.FETCH_ALBUM_SUCCESS,
    album,
    name,
  };
};
export const fetchAlbumErrorAC = (error: string): fetchAlbumErrorACT => ({
  type: photosAT.FETCH_ALBUM_ERROR,
  error,
});
