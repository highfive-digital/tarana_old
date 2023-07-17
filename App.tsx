import React from 'react';

import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PlayerSlider from '~components/PlayerSlider';
import BottomTabs from '~navigation/BottomTabs';
import { tabNavigator } from '~navigation/stateNavigators';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <NavigationHandler stateNavigator={tabNavigator}>
        <NavigationStack>
          <Scene stateKey='tabs'>
            <BottomTabs />
          </Scene>
        </NavigationStack>
      </NavigationHandler>
      <PlayerSlider />
    </GestureHandlerRootView>
  );
};

export default App;
