import {
  fetchMainVideoStartACT,
  fetchMainVideoSuccessACT,
  homeACT,
  homeAT,
} from "../../Types/homePageT";
import { Dispatch } from "redux";
import { storage } from "../../firebase/config";

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
    const result = storage.ref().child("video").child("bg1.mp4").getDownloadURL();

    return Promise.all(await result);
  };

  const loadVideo = async () => {
    const urls = await fetchVideo();
    dispatch(fetchMainVideoSuccess(urls.join("")));
  };
  loadVideo();
};
