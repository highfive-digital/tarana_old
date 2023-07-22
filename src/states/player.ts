import { type NowPlayingMetadata } from 'react-native-track-player';
import { proxy } from 'valtio';
import { baseTrack } from '~modules/player/player.helper';
import {
  type Track,
  type PlayerState,
  type Status,
  type PlayerActions
} from '~modules/player/player.types';

export const playerState: PlayerState = proxy({
  isInitialized: false,
  status: 'NONE',
  error: '',
  currentTrack: baseTrack,
  metaData: {}
});

export const playerActions: PlayerActions = {
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
    const currentTrack = { ...baseTrack, ...track };
    playerState.currentTrack = currentTrack;
  },
  setMetaData: (metaData: NowPlayingMetadata) => {
    playerState.metaData = metaData;
  }
};
