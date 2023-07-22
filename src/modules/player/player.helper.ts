import { Event, type NowPlayingMetadata, type PlaybackState } from 'react-native-track-player';
import { playerActions } from '~states/player';
import { type Status, type Track } from './player.types';

export const baseTrack: Track = {
  artist: '',
  artwork: '',
  genre: '',
  title: '',
  url: ''
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
  }
];
