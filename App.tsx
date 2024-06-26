import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventProvider } from 'react-native-outside-press';
import PlayerSlider from '~components/PlayerSlider';
import BottomTabs from '~navigation/BottomTabs';
import { tabNavigator } from '~navigation/stateNavigators';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
    </QueryClientProvider>
  );
};

export default App;
