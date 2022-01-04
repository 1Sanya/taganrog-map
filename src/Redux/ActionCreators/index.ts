import * as PhotosAC from "./albumsPageAC";
import { fetchAlbumAC } from "./fetchAlbum";
import { fetchMusicAC } from "./fetchMusicAC";
import { fetchMainVideoAC } from "./fetchMainVideoAC";

export default {
  ...PhotosAC,
  fetchAlbumAC,
  fetchMusicAC,
  fetchMainVideoAC,
};
