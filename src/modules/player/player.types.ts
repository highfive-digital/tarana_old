import { type NowPlayingMetadata } from 'react-native-track-player';

export type Status =
  | 'READY'
  | 'BUFFERING'
  | 'PLAYING'
  | 'STOPPED'
  | 'NONE'
  | 'PAUSED'
  | 'CONNECTING'
  | 'IDLE';

export interface PlayerState {
  isInitialized: boolean;
  status: Status;
  error: string;
  currentTrack: Track;
  metaData: NowPlayingMetadata;
}

export interface PlayerActions {
  setStatus: (status: Status) => void;
  setError: (status: string) => void;
  setIsInitialized: (status: boolean) => void;
  setCurrentTrack: (status: any) => void;
  setMetaData: (metaData: NowPlayingMetadata) => void;
}

export interface Track {
  artist: string;
  url: string;
  title: string;
  artwork: string;
  genre: string;
}
