import React from 'react';
import { SView } from '~components';
import SText from '~components/SText/SText';
import { colors, theme } from '~styles';

const MiniPlayer = ({ onClick }: any) => {
  return (
    <SView
      justifyContent='center'
      alignItems='center'
      width={'100%'}
      height={50}
      borderBottomColor={colors.black[900]}
      borderWidth={0.5}
      backgroundColor={theme.dark.navigation.background}
    >
      <SText
        textConfig={{
          onPress: () => {
            onClick();
          }
        }}
      >
        Mini MiniPlayer
      </SText>
    </SView>
  );
};

export default MiniPlayer;
