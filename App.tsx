import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventProvider } from 'react-native-outside-press';
import PlayerSlider from '~components/PlayerSlider';
import BottomTabs from '~navigation/BottomTabs';
import { tabNavigator } from '~navigation/stateNavigators';
import { theme } from '~styles';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor={theme.dark.background.primary} />
      <EventProvider style={{ flex: 1 }}>
        <NavigationHandler stateNavigator={tabNavigator}>
          <NavigationStack>
            <Scene stateKey='tabs'>
              <BottomTabs />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
        <PlayerSlider />
      </EventProvider>
    </GestureHandlerRootView>
  );
};

export default App;
