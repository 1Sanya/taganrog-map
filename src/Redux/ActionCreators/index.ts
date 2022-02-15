import * as PhotosAC from "./albumsPageAC";
import { fetchAlbumAC } from "./fetchAlbumAC";
import { fetchMusicAC } from "./fetchMusicAC";
import { fetchMainVideoAC } from "./fetchMainVideoAC";
import { fetchOtherPhotosAC } from "./fetchOthersPhotosAC";

export default {
  ...PhotosAC,
  fetchAlbumAC,
  fetchMusicAC,
  fetchMainVideoAC,
  fetchOtherPhotosAC,
};
