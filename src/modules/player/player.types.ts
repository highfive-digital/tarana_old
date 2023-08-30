import {
  type NowPlayingMetadata,
  type PlaybackErrorEvent,
  type TrackType
} from 'react-native-track-player';

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
  error: PlaybackErrorEvent;
  currentTrack: Track;
  metaData: NowPlayingMetadata;
  sleepTimeDuration: number;
  elapsedSleepDuration: number;
  volume: number;
}

export interface PlayerActions {
  setStatus: (status: Status) => void;
  setError: (status: PlaybackErrorEvent) => void;
  setIsInitialized: (status: boolean) => void;
  setCurrentTrack: (track: Track) => void;
  setMetaData: (metaData: NowPlayingMetadata) => void;
  setSleepTimeDuration: (duration: number) => void;
  setElapsedSleepDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
}

export interface Track {
  artist: string;
  url: string;
  title: string;
  type: TrackType;
  artwork: string;
  genre: string;
  bufferPosition?: number;
  currentPosition?: number;
  blurHash?: string;
  dominantColor?: string;
}
