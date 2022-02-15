import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { photosACT } from "../../Types/albumsPageT";
import { fetchAlbumStartAC, fetchAlbumSuccessAC } from "./albumsPageAC";

export const fetchAlbumAC = (name: string) => async (dispatch: Dispatch<photosACT>) => {
  dispatch(fetchAlbumStartAC());
  const fetchImages = async () => {
    const result = await storage.ref().child(name).listAll();
    const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());

    return Promise.all(urlPromises);
  };

  const loadImages = async () => {
    const urls = await fetchImages();
    dispatch(fetchAlbumSuccessAC(urls, name));
  };
  loadImages();
};
