import {
  AppKilledPlaybackBehavior,
  Capability,
  type MetadataOptions
} from 'react-native-track-player';

export const metaDataOptions: MetadataOptions = {
  android: {
    appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
  },
  capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
  compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop]
};
