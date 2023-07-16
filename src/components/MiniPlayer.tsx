import React from 'react';
import { SView } from '~components';
import SText from '~components/SText/SText';
import { colors } from '~styles';

const MiniPlayer = ({ onClick }: any) => {
  return (
    <SView
      justifyContent='center'
      alignItems='center'
      width={'100%'}
      height={50}
      borderBottomColor={colors.gray[400]}
      borderWidth={1}
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
