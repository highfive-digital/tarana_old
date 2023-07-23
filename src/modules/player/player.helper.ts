import TrackPlayer, {
  Event,
  TrackType,
  type NowPlayingMetadata,
  type PlaybackState
} from 'react-native-track-player';
import { playerActions, playerState } from '~states/player';
import { type Status, type Track } from './player.types';

export const baseTrack: Track = {
  artist: '',
  artwork: '',
  genre: '',
  title: '',
  url: '',
  type: TrackType.Default,
  bufferPosition: 0,
  currentPosition: 0
};

export const PLAYER_EVENTS = [
  {
    event: Event.PlaybackState,
    callback: (evt: any) => {
      const { state }: PlaybackState = evt;
      playerActions.setStatus(String(state).toUpperCase() as Status);
    }
  },
  {
    event: Event.PlaybackMetadataReceived,
    callback: (data: any) => {
      playerActions.setMetaData(data as NowPlayingMetadata);
    }
  },
  {
    event: Event.PlaybackProgressUpdated,
    callback: (data: any) => {
      const updateTrackData = {
        ...playerState.currentTrack,
        bufferPosition: data.buffer,
        currentPosition: data.position
      };
      playerActions.setCurrentTrack(updateTrackData);

      if (playerState.sleepTimeDuration > 0) {
        if (playerState.sleepTimeDuration === playerState.elapsedSleepDuration) {
          TrackPlayer.pause()
            .then(() => {
              console.log('PLAYER SLEEP DONE');
            })
            .catch(() => {
              console.log('PLAYER SLEEP FAIL');
            });
          playerActions.setElapsedSleepDuration(0);
          playerActions.setSleepTimeDuration(0);
        } else {
          playerActions.setElapsedSleepDuration(1); // replace with constant
        }
      }
    }
  }
];
