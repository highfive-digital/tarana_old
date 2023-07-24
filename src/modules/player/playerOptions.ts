import {
  AppKilledPlaybackBehavior,
  Capability,
  type PlayerOptions,
  type UpdateOptions
} from 'react-native-track-player';

export const playerOptions: PlayerOptions = {
  autoHandleInterruptions: true,
  autoUpdateMetadata: true
};

export const updateOptions: UpdateOptions = {
  android: {
    appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
  },
  capabilities: [Capability.Play, Capability.Pause],
  compactCapabilities: [Capability.Play, Capability.Pause],
  notificationCapabilities: [Capability.Play, Capability.Pause],
  progressUpdateEventInterval: 1
};
