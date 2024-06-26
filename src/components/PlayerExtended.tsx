import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getColorWithOpacity } from '~helpers/common';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import { type playerState } from '~states/player';
import { theme } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';
import SButton from './Button';
import SImage from './Image/SImage';
import SText from './SText/SText';
import SVGIcon from './SVGIcon';
import SView from './SView/SView';
import TitleSubtitle from './TitleSubtitle';
import VolumeSlider from './VolumeSlider';

const { player } = initializeConfig();
const emptyTrack: Track = {} as any;

const PlayerExtended = ({ playbackInfo }: { playbackInfo: typeof playerState }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.7 }}
      colors={[
        getColorWithOpacity(playbackInfo.currentTrack.dominantColor as string, 0.7),
        theme.dark.background.primary
      ]}
      style={{ display: 'flex', flex: 1, borderRadius: borderRadius.xxxl }}
    >
      <SView
        justifyContent='flex-start'
        alignItems='center'
        flex={1}
        padding={spacing.md}
        marginTop={80}
      >
        <SView
          display='flex'
          width='100%'
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='center'
          marginVertical={spacing.lg}
          paddingHorizontal={spacing.none}
        >
          <SView
            overflow='hidden'
            width={'100%'}
            borderRadius={borderRadius.xxxl}
            backgroundColor={playbackInfo.currentTrack.dominantColor}
            elevation={0}
          >
            <SImage
              src={playbackInfo.currentTrack.artwork}
              height={350}
              width={'100%'}
              resizeMode='cover'
              borderRadius={borderRadius.xxxl}
            />
          </SView>
          <SView width='100%' marginVertical={spacing.lg} display='flex' flexDirection='row'>
            <SView width={'60%'}>
              <TitleSubtitle
                title={playbackInfo.currentTrack.title}
                subTitle={playbackInfo.currentTrack.artist}
                titleFontSize='xxl'
                titleFontWeight='bold'
                subtitleFontSize='md'
                subTitleFontWeight='regular'
              />
            </SView>
            <SView width={'40%'} display='flex' alignItems='flex-end'>
              <SView
                backgroundColor={getColorWithOpacity(
                  playbackInfo.currentTrack.dominantColor as string,
                  0.7
                )}
                display='flex'
                flexDirection='row'
                justifyContent='center'
                padding={spacing.sm}
                borderRadius={borderRadius.full}
                gap={spacing.sm}
                width={80}
              >
                <SVGIcon
                  icon='HEART_FILLED'
                  height={20}
                  width={20}
                  fill={theme.dark.text.primary}
                />
                <SText color='primary'>1.2k</SText>
              </SView>
            </SView>
          </SView>

          <SView display='flex' width='100%' marginVertical={spacing.lg}>
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
            <SButton
              onPress={function (): void {
                console.log('::PREV::');
              }}
              type='ICON'
              styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
              iconConfig={{
                icon: 'PREV',
                size: 48,
                fillColor: theme.dark.text.primary
              }}
            />

            <SButton
              onPress={function (): void {
                console.log('::BACKWARD::');
              }}
              type='ICON'
              styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
              iconConfig={{
                icon: 'BACKWARD',
                size: 24,
                fillColor: theme.dark.text.primary
              }}
            />
            {playbackInfo.status === 'BUFFERING' ? (
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
              <SButton
                onPress={() => {
                  player.playOrStop(
                    playbackInfo.status === 'IDLE' ? playbackInfo.currentTrack : emptyTrack
                  );
                }}
                type='ICON'
                styleConfig={{ gutterX: 'none', gutterY: 'none', height: 80, width: 80 }}
                iconConfig={{
                  icon: playbackInfo.status === 'PLAYING' ? 'STOP_CIRCLE' : 'PLAY_CIRCLE',
                  size: 80,
                  fillColor: theme.dark.text.primary
                }}
              />
            )}

            <SButton
              onPress={function (): void {
                console.log('::LIKED::');
              }}
              type='ICON'
              styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
              iconConfig={{
                icon: 'FORWARD',
                size: 24,
                fillColor: theme.dark.text.primary
              }}
            />

            <SButton
              onPress={function (): void {
                console.log('::LIKED::');
              }}
              type='ICON'
              styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
              iconConfig={{
                icon: 'NEXT',
                size: 48,
                fillColor: theme.dark.text.primary
              }}
            />
          </SView>
        </SView>
        <SView
          display='flex'
          flexDirection='row'
          gap={spacing.lg}
          backgroundColor={theme.dark.background.card}
          borderRadius={borderRadius.full}
          padding={spacing.md}
        >
          <SButton
            onPress={function (): void {
              console.log('::LIKED::');
            }}
            type='ICON'
            styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
            iconConfig={{
              icon: 'HEART',
              size: 28,
              fillColor: theme.dark.text.primary
            }}
          />

          <SButton
            onPress={function (): void {
              console.log('::SLEEP::');
            }}
            type='ICON'
            styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
            iconConfig={{
              icon: 'SLEEP',
              size: 28,
              fillColor: theme.dark.text.primary
            }}
          />

          <SButton
            onPress={function (): void {
              console.log('::SHARE::');
            }}
            type='ICON'
            styleConfig={{ gutterX: 'none', gutterY: 'none', height: 40, width: 40 }}
            iconConfig={{
              icon: 'SHARE',
              size: 28,
              fillColor: theme.dark.text.primary
            }}
          />
        </SView>
      </SView>
    </LinearGradient>
  );
};

export default PlayerExtended;
