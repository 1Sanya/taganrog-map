import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

export const fetchMusic = async ()=> {
  const fetchMusic = async () => {
    // Create link to audio
    const musicRef = ref(storage, "music/bgAudio.mp3");
    // Create URL for audio

    return await getDownloadURL(musicRef);
  };

    try {
      return await fetchMusic();
    } catch (error) {
      console.error("Ошибка при загрузке музыки: ", error);
    }
};
