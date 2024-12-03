import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

export const fetchOtherPhotos = async () => {
  const fetchImages = async () => {
    // Create link to "all other photos" folder
    const allRef = ref(storage, "all/");
    // Get the link of "all other photos"
    const list = await listAll(allRef);
    // Get the "all other photos" URLs
    return await Promise.all(list.items.map((imageRef) => getDownloadURL(imageRef)));
  };

  try {
    return await fetchImages();
  } catch (error) {
    console.error("Ошибка при загрузке фотографий: ", error);
  }
};
