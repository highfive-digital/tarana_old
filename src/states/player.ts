import { type NowPlayingMetadata, type PlaybackErrorEvent } from 'react-native-track-player';
import { proxy } from 'valtio';
import { baseTrack } from '~modules/player/player.helper';
import {
  type PlayerActions,
  type PlayerState,
  type Status,
  type Track
} from '~modules/player/player.types';

export const playerState: PlayerState = proxy({
  isInitialized: false,
  status: 'NONE',
  error: { code: '', message: '' },
  currentTrack: baseTrack,
  metaData: {},
  sleepTimeDuration: 0,
  elapsedSleepDuration: 0,
  volume: 0.5
});

export const playerActions: PlayerActions = {
  setStatus: (status: Status) => {
    playerState.status = status;
  },
  setError: (error: PlaybackErrorEvent) => {
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
  },
  setSleepTimeDuration(duration: number) {
    const durationInSeconds = duration * 60;
    playerState.elapsedSleepDuration = 0;
    playerState.sleepTimeDuration = durationInSeconds;
  },
  setElapsedSleepDuration(duration: number) {
    playerState.elapsedSleepDuration += duration;
  },
  setVolume(volume: number) {
    playerState.volume = volume;
  }
};
