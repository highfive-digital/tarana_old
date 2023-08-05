import { Slider } from '@miblanchard/react-native-slider';
import { initializeConfig } from '~helpers/intialize.config';
import { playerState } from '~states/player';
import { colors, theme } from '~styles';

const VolumeSlider = () => {
  const { player } = initializeConfig();

  return (
    <Slider
      value={playerState.volume}
      maximumValue={1}
      trackStyle={{ backgroundColor: colors.black[400], height: 3 }}
      thumbStyle={{
        backgroundColor: theme.dark.text.primary,
        height: 24,
        width: 24,
        borderRadius: 100
      }}
      minimumTrackTintColor={theme.dark.button.primary}
      onValueChange={(value) => {
        player
          .setVolume(Number(Number(value).toFixed(2)))
          .then(() => {
            console.log('VOLUME_UPDATED');
          })
          .catch(() => {
            console.log('VOLUME_UPDATE_FAILED');
          });
      }}
    />
  );
};

export default VolumeSlider;
