import { ActivityIndicator } from 'react-native';
import { useSnapshot } from 'valtio';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import { playerState } from '~states/player';
import { colors, theme } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';
import SImage from './Image/SImage';
import SPressable from './SPressable/SPressable';
import SText from './SText/SText';
import SVGIcon from './SVGIcon/SVGIcon';
import SView from './SView/SView';
import TitleSubtitle from './TitleSubtitle';
import VolumeSlider from './VolumeSlider';

const { player } = initializeConfig();
const emptyTrack: Track = {} as any;

const PlayerExtended = () => {
  const snap = useSnapshot(playerState);
  return (
    <SView
      backgroundColor={theme.dark.background.primary}
      justifyContent='flex-start'
      alignItems='center'
      flex={1}
      padding={spacing.md}
    >
      <SView
        paddingVertical={spacing.md}
        width={'100%'}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <SVGIcon icon='ARROW_DOWN' height={24} width={24} fill={theme.dark.text.primary} />
        <SText family='semibold' fontSize={fontSize.base} color='primary'>
          {snap.currentTrack.title}
        </SText>
        <SVGIcon icon='MORE' height={24} width={24} fill={theme.dark.text.primary} />
      </SView>
      <SView
        display='flex'
        width='100%'
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='center'
        marginVertical={spacing.lg}
        paddingHorizontal={spacing.none}
      >
        <SView overflow='hidden' width={'100%'} borderRadius={borderRadius.xxxl}>
          <SImage
            src={snap.currentTrack.artwork}
            height={350}
            width={'100%'}
            resizeMode='cover'
            borderRadius={borderRadius.xxxl}
          />
        </SView>
        <SView width='100%' marginVertical={spacing.lg} display='flex' flexDirection='row'>
          <SView width={'60%'}>
            <TitleSubtitle
              title={snap.currentTrack.title}
              subTitle={snap.currentTrack.artist}
              titleFontSize='xxl'
              titleFontWeight='bold'
              subtitleFontSize='md'
              subTitleFontWeight='regular'
            />
          </SView>
          <SView width={'40%'} display='flex' alignItems='flex-end'>
            <SView
              backgroundColor={colors.red[600]}
              display='flex'
              flexDirection='row'
              justifyContent='center'
              padding={spacing.sm}
              borderRadius={borderRadius.full}
              gap={spacing.sm}
              width={80}
            >
              <SVGIcon icon='HEART_FILLED' height={20} width={20} fill={theme.dark.text.primary} />
              <SText color='primary'>1.2k</SText>
            </SView>
          </SView>
        </SView>

        <SView display='flex' width='100%'>
          <VolumeSlider />
        </SView>
        <SView
          display='flex'
          width='100%'
          justifyContent='center'
          alignItems='center'
          flexDirection='row'
          gap={spacing.sm}
          marginVertical={spacing.lg}
        >
          <SPressable
            display='flex'
            height={40}
            width={40}
            justifyContent='center'
            alignItems='center'
          >
            <SVGIcon icon='PREV' height={48} width={48} fill={theme.dark.text.primary} />
          </SPressable>
          <SPressable
            display='flex'
            height={40}
            width={40}
            justifyContent='center'
            alignItems='center'
          >
            <SVGIcon icon='BACKWARD' height={24} width={24} fill={theme.dark.text.primary} />
          </SPressable>

          <SPressable
            justifyContent='center'
            alignItems='center'
            pressableConfig={{
              onPress: () => {
                player.playOrStop(snap.status === 'IDLE' ? snap.currentTrack : emptyTrack);
              }
            }}
          >
            {snap.status === 'BUFFERING' ? (
              <ActivityIndicator
                size='large'
                style={{
                  height: 80,
                  width: 80,
                  transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }]
                }}
                color={theme.dark.text.primary}
              />
            ) : (
              <SVGIcon
                icon={snap.status === 'PLAYING' ? 'STOP_CIRCLE' : 'PLAY_CIRCLE'}
                height={80}
                width={80}
                fill={theme.dark.text.primary}
              />
            )}
          </SPressable>
          <SPressable
            display='flex'
            height={40}
            width={40}
            justifyContent='center'
            alignItems='center'
          >
            <SVGIcon icon='FORWARD' height={24} width={24} fill={theme.dark.text.primary} />
          </SPressable>
          <SPressable
            display='flex'
            height={40}
            width={40}
            justifyContent='center'
            alignItems='center'
          >
            <SVGIcon icon='NEXT' height={48} width={48} fill={theme.dark.text.primary} />
          </SPressable>
        </SView>
      </SView>
      <SView
        display='flex'
        flexDirection='row'
        gap={spacing.lg}
        backgroundColor={theme.dark.background.card}
        borderRadius={borderRadius.full}
        paddingHorizontal={spacing.sm}
        paddingVertical={spacing.xs}
      >
        <SPressable
          display='flex'
          height={40}
          width={40}
          justifyContent='center'
          alignItems='center'
        >
          <SVGIcon icon='HEART' height={28} width={28} fill={theme.dark.text.primary} />
        </SPressable>
        <SPressable
          display='flex'
          height={40}
          width={40}
          justifyContent='center'
          alignItems='center'
        >
          <SVGIcon icon='SLEEP' height={28} width={28} fill={theme.dark.text.primary} />
        </SPressable>
        <SPressable
          display='flex'
          height={40}
          width={40}
          justifyContent='center'
          alignItems='center'
        >
          <SVGIcon icon='SHARE' height={28} width={28} fill={theme.dark.text.primary} />
        </SPressable>
      </SView>
    </SView>
  );
};

export default PlayerExtended;
