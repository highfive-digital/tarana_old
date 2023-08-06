import { useSnapshot } from 'valtio';
import { SPressable, SVGIcon, SView, TitleSubtitle } from '~components';
import { initializeConfig } from '~helpers/intialize.config';
import { playerState } from '~states/player';
import { colors, theme } from '~styles';
import { spacing } from '~styles/utilities';
import SImage from './Image/SImage';

const { player } = initializeConfig();

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
      <SView height={50} width={50}>
        <SPressable
          pressableConfig={{
            onPress: () => {
              player.playOrStop();
            }
          }}
        >
          <SVGIcon
            icon={snap.status === 'PLAYING' ? 'STOP' : 'PLAY'}
            height={50}
            width={50}
            fill={colors.red[600]}
          />
        </SPressable>
      </SView>
    </SPressable>
  );
};

export default MiniPlayer;
