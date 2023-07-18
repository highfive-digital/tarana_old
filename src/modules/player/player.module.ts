import TrackPlayer, { Event, type PlaybackStateEvent, type Track } from 'react-native-track-player';
import { playerState } from '~states/playerState';
import { type Status } from './player.types';

class Player {
  private static _instance: Player;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Player._instance) {
      console.warn(
        'Instantiation failed: cannot create multiple instance of AudioX returning existing instance'
      );
      return Player._instance;
    }
    Player._instance = this;
  }

  async setupPlayer() {
    let isPlayerInitialized = false;
    try {
      await TrackPlayer.setupPlayer();
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

  async add(track: Track | Track[]) {
    const isAdded = await TrackPlayer.add(track);
    playerState.setCurrentTrack(track as Track);
    console.log(isAdded);
  }

  async getPlayerState() {
    const state = await TrackPlayer.getState();
    return String(state).toUpperCase() as Status;
  }

  attachEventListeners() {
    const EVENTS = [
      {
        event: Event.PlaybackState,
        callback: (evt: any) => {
          const { state }: PlaybackStateEvent = evt;
          playerState.setStatus(String(state).toUpperCase() as Status);
        }
      }
    ];

    EVENTS.forEach((evtObj) => {
      TrackPlayer.addEventListener(evtObj.event, evtObj.callback);
    });
  }

  play() {
    TrackPlayer.play()
      .then(() => {
        console.log('PRESSED_PLAY');
      })
      .catch((res) => {
        console.log('STATUS_PLAY', res);
      });
  }

  pause() {
    if (playerState.status === 'PLAYING') {
      TrackPlayer.pause()
        .then((res) => {
          console.log('PAUSED', res);
        })
        .catch((res) => {
          console.log('PAUSE FAILED', res);
        });
    }
  }
}

export default Player;
