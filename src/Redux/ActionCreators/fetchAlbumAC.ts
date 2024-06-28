// import { storage } from "../../firebase/config";
// import { Dispatch } from "redux";
// import { photosACT } from "../../Types/albumsPageT";
// import { fetchAlbumStartAC, fetchAlbumSuccessAC } from "./albumsPageAC";
//
// export const fetchAlbumAC = (name: string) => async (dispatch: Dispatch<photosACT>) => {
//   dispatch(fetchAlbumStartAC());
//   const fetchImages = async () => {
//     const result = await storage.ref().child(name).listAll();
//     const urlPromises = result.items.map((imageRef) => imageRef.getDownloadURL());
//
//     return Promise.all(urlPromises);
//   };
//
//   const loadImages = async () => {
//     const urls = await fetchImages();
//     dispatch(fetchAlbumSuccessAC(urls, name));
//   };
//   loadImages();
// };

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { photosACT } from "../../Types/albumsPageT";
import { fetchAlbumStartAC, fetchAlbumSuccessAC } from "./albumsPageAC";

export const fetchAlbumAC = (name: string) => async (dispatch: Dispatch<photosACT>) => {
  dispatch(fetchAlbumStartAC());

  const fetchImages = async () => {
    // Создаем ссылку на корневую папку/каталог
    const storageRef = ref(storage, name);

    // Получаем список всех файлов внутри указанной папки/каталога
    const result = await listAll(storageRef);

    // Получаем URL для всех файлов одновременно
    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

    return Promise.all(urlPromises);
  };

  const loadImages = async () => {
    try {
      const urls = await fetchImages();
      dispatch(fetchAlbumSuccessAC(urls, name));
    } catch (error) {
      console.error("Ошибка при загрузке изображений: ", error);
      // Возможно, стоит также создать и задиспатчить экшен для обработки ошибок
    }
  };

  loadImages();
};
