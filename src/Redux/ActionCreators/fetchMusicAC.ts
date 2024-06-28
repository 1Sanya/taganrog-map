import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { fetchMusicStartACT, fetchMusicSuccessACT, homeACT, homeAT } from "../../Types/homePageT";
import { ref, getDownloadURL } from "firebase/storage";

const fetchMusicStartAC = (): fetchMusicStartACT => ({
  type: homeAT.FETCH_MUSIC_START,
});

const fetchMusicSuccessAC = (music: string): fetchMusicSuccessACT => ({
  type: homeAT.FETCH_MUSIC_SUCCESS,
  music,
});

export const fetchMusicAC = () => async (dispatch: Dispatch<homeACT>) => {
  dispatch(fetchMusicStartAC());

  const fetchMusic = async () => {
    // Создаем ссылку на файл аудиофайла
    const musicRef = ref(storage, "music/bgAudio.mp3");
    // Получаем URL для аудиофайла
    const musicUrl = await getDownloadURL(musicRef);
    return musicUrl;
  };

  const loadMusic = async () => {
    try {
      const url = await fetchMusic();
      dispatch(fetchMusicSuccessAC(url));
    } catch (error) {
      console.error("Ошибка при загрузке музыки: ", error);
      // Возможно, следует создать и задиспатчить экшен для обработки ошибок
    }
  };

  loadMusic();
};
