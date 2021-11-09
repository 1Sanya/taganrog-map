import { photoACT, photosReducerT } from "../../Types/photosT";

const initialState: photosReducerT = {
  photos: [],
};

export const photosReducer = (state = initialState, action: photoACT): photosReducerT => {
  switch (action.type) {
    default:
      return state;
  }
};
