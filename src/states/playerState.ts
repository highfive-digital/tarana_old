import { type Track } from 'react-native-track-player';
import { proxy } from 'valtio';
import { baseTrack } from '~modules/player/player.helper';
import { type PlayerState, type Status } from '~modules/player/player.types';

export const playerState: PlayerState = proxy({
  isInitialized: false,
  status: 'NONE',
  error: '',
  currentTrack: baseTrack,
  setStatus: (status: Status) => {
    playerState.status = status;
  },
  setError: (error: string) => {
    playerState.error = error;
  },
  setIsInitialized: (isInitialized: boolean) => {
    playerState.isInitialized = isInitialized;
  },
  setCurrentTrack: (track: Track) => {
    playerState.currentTrack = track;
  }
});
