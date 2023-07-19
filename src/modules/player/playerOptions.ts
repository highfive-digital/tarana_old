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
  capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
  compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
  notificationCapabilities: [Capability.Play, Capability.Pause, Capability.Stop]
};
