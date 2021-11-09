export type photosReducerT = {
  photos: any[];
};

export enum photosAT {
  SET_ACTIVE_PHOTO = "SET_ACTIVE_PHOTO",
}

export type photoACT = setActivePhotoACT;

export interface setActivePhotoACT {
  type: photosAT.SET_ACTIVE_PHOTO;
}
