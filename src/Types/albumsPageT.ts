export type albumsReducerT = {
  museums: museumsT[];
  albums: albumsT[];
  error: boolean | string;
  loading: boolean;
  currentAlbum: any[];
};

export interface albumsT {
  name: string;
  displayName: string;
  avatar: string;
  isWide: boolean;
  color?: string;
  mapsLink: string;
}

export interface museumsT {
  name: string;
  displayName: string;
  avatar: string;
  museumOnlineLink: string;
  mapsLink: string;
  color?: string;
  isWide: boolean;
}

export interface albumsPageT {
  name: string;
}

export interface loadingPageT {
  displayName: string;
}

export enum photosAT {
  FETCH_ALBUM_START = "FETCH_ALBUM_START",
  FETCH_ALBUM_SUCCESS = "FETCH_ALBUM_SUCCESS",
  FETCH_ALBUM_ERROR = "FETCH_ALBUM_ERROR",
}

export type photosACT = fetchAlbumStartACT | fetchAlbumSuccessACT | fetchAlbumErrorACT;

export interface fetchAlbumStartACT {
  type: photosAT.FETCH_ALBUM_START;
}
export interface fetchAlbumSuccessACT {
  name: string;
  type: photosAT.FETCH_ALBUM_SUCCESS;
  album: Array<string>;
}
export interface fetchAlbumErrorACT {
  type: photosAT.FETCH_ALBUM_ERROR;
  error: string | boolean;
}
