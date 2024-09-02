export type albumsReducerT = {
  museums: museumsT[];
  albums: albumsT[];
  // industries: industriesT[];
  error: boolean | string;
  loading: boolean;
  currentAlbum: any[];
};

export interface albumsT {
  name: string;
  displayName: string;
  mediaUrl: string;
  isWide: boolean;
  color?: string;
  onMapsLink: string;
  textColor?: string;
  isVideoPreview?: boolean;
}


export interface museumsT extends albumsT {
  museumOnlineLink: string;
}

export interface industriesT extends albumsT {

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
