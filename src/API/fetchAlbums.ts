import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

export const fetchAlbums = async (name: string) => {
  const fetchImages = async () => {
    // Create link to folder
    const storageRef = ref(storage, name);

    // Get the folder's files
    const result = await listAll(storageRef);

    // Get the files urls
    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

    return Promise.all(urlPromises);
  };

  try {
    return await fetchImages()
    // dispatch(fetchAlbumSuccessAC(urls, name));
  } catch (error) {
    console.error("Ошибка при загрузке изображений: ", error);
  }
};
