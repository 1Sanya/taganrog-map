export interface Album {
  name: string;
  displayName: string;
  mediaUrl: string;
  isWide: boolean;
  color?: string;
  onMapsLink: string;
  textColor?: string;
  isVideoPreview?: boolean;
}


export interface museumsT extends Album {
  museumOnlineLink: string;
}

export interface industriesT extends Album {

}