import { photosACT, photosAT, albumsReducerT } from "../../Types/albumsPageT";

export function getAlbumsModule() {
  return {
    id: "albums",
    reducerMap: {
      albumsReducer: albumsReducer,
    },
  };
}

export const initialState: albumsReducerT = {
  currentAlbum: [],
  error: false,
  loading: false,
  museums: [],
  albums: [],
  industries: [],
};

export const albumsReducer = (state = initialState, action: photosACT): albumsReducerT => {
  switch (action.type) {
    case photosAT.FETCH_ALBUM_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case photosAT.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentAlbum: action.album,
      };
    case photosAT.FETCH_ALBUM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
