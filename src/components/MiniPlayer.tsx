import { ActivityIndicator } from 'react-native';
import { useSnapshot } from 'valtio';
import { SPressable, SVGIcon, SView, TitleSubtitle } from '~components';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import { playerState } from '~states/player';
import { colors, theme } from '~styles';
import { spacing } from '~styles/utilities';
import SImage from './Image/SImage';

const { player } = initializeConfig();
const emptyTrack: Track = {} as any;

const MiniPlayer = ({ onClick }: any) => {
  const snap = useSnapshot(playerState);

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
          onClick();
        }
      }}
    >
      <SView height={50} width={50}>
        <SImage
          src={snap.currentTrack.artwork}
          height={50}
          width={50}
          priority='normal'
          resizeMode='contain'
        />
      </SView>
      <SView display='flex' flex={1} marginHorizontal={spacing.sm}>
        <TitleSubtitle title={snap.currentTrack.title} subTitle={snap.currentTrack.artist} />
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
          pressableConfig={{
            onPress: () => {
              console.log('liked');
            }
          }}
        >
          <SVGIcon icon='HEART' height={30} width={30} fill={colors.black[50]} />
        </SPressable>
        <SPressable
          pressableConfig={{
            onPress: () => {
              player.playOrStop(snap.status === 'IDLE' ? snap.currentTrack : emptyTrack);
            }
          }}
        >
          {snap.status === 'BUFFERING' ? (
            <ActivityIndicator
              size='large'
              style={{ height: 40, width: 40, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              color={colors.black[50]}
            />
          ) : (
            <SVGIcon
              icon={snap.status === 'PLAYING' ? 'STOP' : 'PLAY'}
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
