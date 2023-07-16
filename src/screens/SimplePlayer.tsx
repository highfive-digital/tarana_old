import { NavigationContext } from 'navigation-react';
import React, { useContext } from 'react';
import { SView } from '~components';
import SText from '~components/SText/SText';

const SimplePlayer = () => {
  const { stateNavigator } = useContext(NavigationContext);

  return (
    <SView
      display='flex'
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='white'
    >
      <SText
        textConfig={{
          onPress: () => {
            stateNavigator.navigate('player');
          }
        }}
      >
        Mini Player
      </SText>
    </SView>
  );
};

export default SimplePlayer;
