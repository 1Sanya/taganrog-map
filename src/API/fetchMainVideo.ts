import { storage } from '../firebase/config'
import { getDownloadURL, ref } from 'firebase/storage'

export const fetchMainVideo = async  () => {
  const fetchVideo = async () => {
    // Create link to video file
    const videoRef = ref(storage, "video/bg1.mp4");
    // Get the video's url
    return await getDownloadURL(videoRef);
  };

  try {
    return await fetchVideo()
  } catch (error) {
    console.error("Ошибка при загрузке видео: ", error);
  }
};
