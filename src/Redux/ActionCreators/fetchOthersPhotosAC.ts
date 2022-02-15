import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { fetchOtherPhotosStartAC, fetchOtherPhotosSuccessAC } from "./otherPhotosAC";
import { homeACT } from "../../Types/homePageT";

export const fetchOtherPhotosAC = () => async (dispatch: Dispatch<homeACT>) => {
  dispatch(fetchOtherPhotosStartAC());
  const fetchImages = async () => {
    const result = await storage.ref().child("all").listAll();
    const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());

    return Promise.all(urlPromises);
  };

  const loadImages = async () => {
    const urls = await fetchImages();
    dispatch(fetchOtherPhotosSuccessAC(urls));
  };
  loadImages();
};
