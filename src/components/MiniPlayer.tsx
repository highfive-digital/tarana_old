import { ActivityIndicator } from 'react-native';
import { SPressable, SVGIcon, SView, TitleSubtitle } from '~components';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import { type playerState } from '~states/player';
import { colors, theme } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';
import SImage from './Image/SImage';

const { player } = initializeConfig();
const emptyTrack: Track = {} as any;

interface MiniPlayerProps {
  playbackInfo: typeof playerState;
  onPress: () => void;
}

const MiniPlayer: React.FC<MiniPlayerProps> = ({ onPress, playbackInfo }) => {
  return (
    <SPressable
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      paddingHorizontal={spacing.sm}
      width={'100%'}
      height={60}
      borderBottomColor={colors.material[800]}
      borderWidth={1}
      backgroundColor={theme.dark.background.primary}
      pressableConfig={{
        onPress: () => {
          onPress();
        }
      }}
    >
      <SView
        height={50}
        width={50}
        backgroundColor={playbackInfo.currentTrack.dominantColor}
        borderRadius={borderRadius.md}
      >
        <SImage
          src={playbackInfo.currentTrack.artwork}
          height={50}
          width={50}
          priority='normal'
          resizeMode='contain'
          borderRadius={borderRadius.md}
        />
      </SView>
      <SView
        display='flex'
        flex={1}
        marginHorizontal={spacing.md}
        alignSelf='center'
        gap={spacing.xxs}
      >
        <TitleSubtitle
          title={playbackInfo.currentTrack.title}
          subTitle={playbackInfo.currentTrack.artist}
        />
      </SView>
      <SView
        height={50}
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        columnGap={spacing.md}
      >
        <SPressable
          height={40}
          width={40}
          display='flex'
          justifyContent='center'
          alignItems='center'
          pressableConfig={{
            onPress: () => {
              console.log('liked');
            }
          }}
        >
          <SVGIcon icon='HEART' height={28} width={28} fill={colors.black[50]} />
        </SPressable>
        <SPressable
          height={40}
          width={40}
          justifyContent='center'
          alignItems='center'
          pressableConfig={{
            onPress: () => {
              console.log(playbackInfo.status, JSON.stringify(playbackInfo.currentTrack, null, 2));
              player.playOrStop(
                playbackInfo.status === 'IDLE' ? playbackInfo.currentTrack : emptyTrack
              );
            }
          }}
        >
          {playbackInfo.status === 'BUFFERING' ? (
            <ActivityIndicator
              size='large'
              style={{ height: 36, width: 36, transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
              color={colors.black[50]}
            />
          ) : (
            <SVGIcon
              icon={playbackInfo.status === 'PLAYING' ? 'STOP' : 'PLAY'}
              height={40}
              width={40}
              fill={colors.black[50]}
            />
          )}
        </SPressable>
      </SView>
    </SPressable>
  );
};

export default MiniPlayer;
