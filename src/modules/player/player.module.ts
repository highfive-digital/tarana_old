import TrackPlayer, { type Track } from 'react-native-track-player';

import { playerState } from '~states/playerState';
import { PLAYER_EVENTS, baseTrack } from './player.helper';
import { type Status } from './player.types';
import { playerOptions, updateOptions } from './playerOptions';

class Player {
  private static _instance: Player;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Player._instance) {
      console.warn(
        'Instantiation failed: cannot create multiple instance of Player returning existing instance'
      );
      return Player._instance;
    }
    Player._instance = this;
  }

  async setupPlayer() {
    let isPlayerInitialized = false;
    try {
      await TrackPlayer.setupPlayer(playerOptions);
      await TrackPlayer.updateOptions(updateOptions);
      playerState.setStatus('IDLE');
      isPlayerInitialized = true;
    } catch (error) {
      isPlayerInitialized = false;
    }

    return isPlayerInitialized;
  }

  init() {
    this.setupPlayer()
      .then((res) => {
        if (res) {
          playerState.setIsInitialized(res);
        }
      })
      .catch((res) => {
        playerState.setIsInitialized(res);
      });
  }

  async add(track: Track[]) {
    const isAdded = await TrackPlayer.add(track);
    const activeTrackIndex = await TrackPlayer.getActiveTrackIndex();
    const activeTrack = await TrackPlayer.getTrack(activeTrackIndex as number);
    const currentTrack = activeTrack !== undefined ? activeTrack : baseTrack;
    playerState.setCurrentTrack(currentTrack);
    console.log('::IS_ADDED::', isAdded);
  }

  async getPlayerState() {
    const state = await TrackPlayer.getPlaybackState();
    return String(state).toUpperCase() as Status;
  }

  attachEventListeners() {
    PLAYER_EVENTS.forEach((evtObj) => {
      TrackPlayer.addEventListener(evtObj.event, evtObj.callback);
    });
  }

  play() {
    TrackPlayer.play()
      .then(() => {
        console.log('::PRESSED_PLAY::');
      })
      .catch((res) => {
        console.log('::STATUS_PLAY::', res);
      });
  }

  pause() {
    if (playerState.status === 'PLAYING') {
      TrackPlayer.pause()
        .then((res) => {
          console.log('::PAUSED::', res);
        })
        .catch((res) => {
          console.log('::PAUSE FAILED::', res);
        });
    }
  }
}

export default Player;
