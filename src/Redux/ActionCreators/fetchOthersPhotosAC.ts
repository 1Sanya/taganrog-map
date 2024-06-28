import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { fetchOtherPhotosStartAC, fetchOtherPhotosSuccessAC } from "./otherPhotosAC";
import { homeACT } from "../../Types/homePageT";

export const fetchOtherPhotosAC = () => async (dispatch: Dispatch<homeACT>) => {
  dispatch(fetchOtherPhotosStartAC());

  const fetchImages = async () => {
    // Создаем ссылку на папку "all"
    const allRef = ref(storage, "all/");
    // Получаем список всех файлов в папке "all"
    const list = await listAll(allRef);
    // Получаем URL для всех файлов
    const urls = await Promise.all(list.items.map((imageRef) => getDownloadURL(imageRef)));
    return urls;
  };

  const loadImages = async () => {
    try {
      const urls = await fetchImages();
      dispatch(fetchOtherPhotosSuccessAC(urls));
    } catch (error) {
      console.error("Ошибка при загрузке фотографий: ", error);
      // Возможно, следует создать и задиспатчить экшен для обработки ошибок
    }
  };

  loadImages();
};
