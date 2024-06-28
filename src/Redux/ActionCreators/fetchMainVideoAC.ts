import {
  fetchMainVideoStartACT,
  fetchMainVideoSuccessACT,
  homeACT,
  homeAT,
} from "../../Types/homePageT";
import { Dispatch } from "redux";
import { storage } from "../../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

const fetchMainVideoStart = (): fetchMainVideoStartACT => ({
  type: homeAT.FETCH_MAIN_VIDEO_START,
});

const fetchMainVideoSuccess = (video: string): fetchMainVideoSuccessACT => ({
  type: homeAT.FETCH_MAIN_VIDEO_SUCCESS,
  video,
});

export const fetchMainVideoAC = () => async (dispatch: Dispatch<homeACT>) => {
  dispatch(fetchMainVideoStart());

  const fetchVideo = async () => {
    // Создаем ссылку на файл видео
    const videoRef = ref(storage, "video/bg1.mp4");
    // Получаем URL для видео файла
    const videoUrl = await getDownloadURL(videoRef);
    return videoUrl;
  };

  const loadVideo = async () => {
    try {
      const url = await fetchVideo();
      dispatch(fetchMainVideoSuccess(url));
    } catch (error) {
      console.error("Ошибка при загрузке видео: ", error);
      // Возможно, следует создать и задиспатчить экшен для обработки ошибок
    }
  };

  loadVideo();
};
