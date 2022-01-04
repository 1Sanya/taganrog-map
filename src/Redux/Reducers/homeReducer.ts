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
  bgVideo: null,
  videoLoading: false,
};

const homeReducer = (state = initialState, action: homeACT) => {
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
        loading: false,
        music: action.music,
      };
    default:
      return state;
  }
};

export default homeReducer;
