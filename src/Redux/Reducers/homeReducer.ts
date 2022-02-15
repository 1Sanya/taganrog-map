import { homeACT, homeAT } from "../../Types/homePageT";

export function getMusicModule() {
  return {
    id: "home",
    reducerMap: {
      homeReducer: homeReducer,
    },
  };
}

const initialState = {
  music: null,
  musicLoading: false,
  photos: [],
  photosIsLoading: false,
  bgVideo: null,
  videoLoading: false,
};

interface InitialState {
  music: null | string;
  musicLoading: boolean;
  photos: Array<string>;
  photosIsLoading: boolean;
  bgVideo: null | string;
  videoLoading: boolean;
}

const homeReducer = (state = initialState, action: homeACT): InitialState => {
  switch (action.type) {
    case homeAT.FETCH_MAIN_VIDEO_START:
      return {
        ...state,
        videoLoading: true,
      };
    case homeAT.FETCH_MAIN_VIDEO_SUCCESS:
      return {
        ...state,
        bgVideo: action.video,
      };
    case homeAT.FETCH_MUSIC_START:
      return {
        ...state,
        musicLoading: true,
      };
    case homeAT.FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        musicLoading: false,
        music: action.music,
      };
    case homeAT.FETCH_MAIN_PHOTOS_START:
      return {
        ...state,
        photosIsLoading: true,
      };
    case homeAT.FETCH_MAIN_PHOTOS_SUCCESS:
      return {
        ...state,
        photosIsLoading: false,
        photos: action.photos,
      };
    default:
      return state;
  }
};

export default homeReducer;
