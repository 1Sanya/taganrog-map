import { storage } from "../../firebase/config";
import { Dispatch } from "redux";
import { fetchMusicStartACT, fetchMusicSuccessACT, homeACT, homeAT } from "../../Types/homePageT";

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
    const result = storage.ref().child("music").child("bgAudio.mp3").getDownloadURL();

    return Promise.all(await result);
  };

  const loadMusic = async () => {
    const urls = await fetchMusic();
    dispatch(fetchMusicSuccessAC(urls.join("")));
  };
  loadMusic();
};
