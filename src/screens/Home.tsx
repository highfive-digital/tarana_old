import { NavigationContext } from 'navigation-react';
import React, { useContext } from 'react';
import { SView } from '~components';
import SText from '~components/SText/SText';

const Home = () => {
  const { stateNavigator } = useContext(NavigationContext);

  return (
    <SView display='flex' flex={1} justifyContent='center' alignItems='center'>
      <SText
        textConfig={{
          onPress: () => {
            stateNavigator.navigate('playerx', { size: 20 });
          }
        }}
      >
        GO TO PLAYER
      </SText>
      <SText
        marginTop={40}
        textConfig={{
          onPress: () => {
            stateNavigator.navigate('search', { size: 20 });
          }
        }}
      >
        GO TO SEARCH
      </SText>
    </SView>
  );
};

export default Home;
