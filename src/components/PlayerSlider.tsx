import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetTimingConfigs
} from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useBottomSheetBackHandler } from '~helpers/hooks/useBottomSheetBackHandler';
import { theme } from '~styles';
import MiniPlayer from './MiniPlayer';
import SText from './SText/SText';
import SView from './SView/SView';

const SimplePlayer = () => {
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
        <MiniPlayer
          onClick={() => {
            handlePresentModalPress();
          }}
        />
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
