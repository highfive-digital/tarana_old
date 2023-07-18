/* eslint-disable @typescript-eslint/no-misused-promises */
// src/services/PlaybackService.ts
import TrackPlayer, { Event } from 'react-native-track-player';

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    await TrackPlayer.pause();
  });
};
