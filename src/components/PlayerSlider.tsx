import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetTimingConfigs
} from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef, type ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useSnapshot } from 'valtio';
import { useBottomSheetBackHandler } from '~helpers/hooks/useBottomSheetBackHandler';
import { initializeConfig } from '~helpers/intialize.config';
import { playerActions, playerState } from '~states/player';
import { theme } from '~styles';
import MiniPlayer from './MiniPlayer';
import SText from './SText/SText';
import SView from './SView/SView';

const { storage } = initializeConfig();

const SimplePlayer = () => {
  const snap = useSnapshot(playerState);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['100%', '100%'], []);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const { handleSheetPositionChange } = useBottomSheetBackHandler(bottomSheetModalRef);
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 150,
    easing: Easing.sin
  });

  //  Check if this can be handled more efficiently
  useEffect(() => {
    const lastTrack =
      snap.currentTrack.title === ''
        ? storage.get('current_track', 'object')[0]
        : playerState.currentTrack;
    playerActions.setCurrentTrack(lastTrack);
  }, [snap.currentTrack.title]);

  return (
    <BottomSheetModalProvider>
      <SView
        flex={1}
        justifyContent='center'
        backgroundColor={theme.dark.background.primary}
        position='absolute'
        bottom={56}
        width={'100%'}
      >
        {snap.currentTrack.title !== '' ? (
          <MiniPlayer
            onClick={() => {
              handlePresentModalPress();
            }}
          />
        ) : (
          (null as unknown as ReactElement)
        )}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          enablePanDownToClose={false}
          snapPoints={snapPoints}
          onChange={handleSheetPositionChange}
          backgroundStyle={backGroundStyle.bg}
          animationConfigs={animationConfigs}
        >
          <SView
            backgroundColor={theme.dark.background.primary}
            justifyContent='center'
            alignItems='center'
            flex={1}
          >
            <SText>Awesome 🎉</SText>
          </SView>
        </BottomSheetModal>
      </SView>
    </BottomSheetModalProvider>
  );
};

const backGroundStyle = StyleSheet.create({
  bg: {
    borderRadius: 0,
    backgroundColor: theme.dark.background.primary
  }
});

export default SimplePlayer;
