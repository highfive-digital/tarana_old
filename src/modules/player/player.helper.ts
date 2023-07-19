import {
  Event,
  type NowPlayingMetadata,
  type PlaybackState,
  type Track
} from 'react-native-track-player';
import { playerState } from '~states/playerState';
import { type Status } from './player.types';

export const baseTrack: Track = {
  artist: '',
  url: '',
  title: '',
  description: '',
  duration: 0,
  artwork: ''
};

export const PLAYER_EVENTS = [
  {
    event: Event.PlaybackState,
    callback: (evt: any) => {
      const { state }: PlaybackState = evt;
      playerState.setStatus(String(state).toUpperCase() as Status);
    }
  },
  {
    event: Event.PlaybackMetadataReceived,
    callback: (data: any) => {
      playerState.setMetaData(data as NowPlayingMetadata);
    }
  }
];
