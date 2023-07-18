import { type Track } from 'react-native-track-player';

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
  setStatus: (status: Status) => void;
  setError: (status: string) => void;
  setIsInitialized: (status: boolean) => void;
  setCurrentTrack: (status: Track) => void;
}
