import { Event, type PlaybackStateEvent, type Track } from 'react-native-track-player';
import { playerState } from '~states/playerState';
import { type Status } from './player.types';

export const baseTrack: Track = {
  artist: '',
  url: '',
  title: '',
  description: '',
  duration: 0
};

export const PLAYER_EVENTS = [
  {
    event: Event.PlaybackState,
    callback: (evt: any) => {
      const { state }: PlaybackStateEvent = evt;
      playerState.setStatus(String(state).toUpperCase() as Status);
    }
  }
];
