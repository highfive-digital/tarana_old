import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene, TabBar, TabBarItem } from 'navigation-react-native';
import React from 'react';
import { Platform } from 'react-native';
import Home from '~screens/Home';
import Search from '~screens/Search';
import { theme } from '~styles';
import { fonts } from '~styles/theme';
import { mainNavigator } from './stateNavigators';

const BottomTabs = () => {
  return (
    <TabBar
      primary={true}
      bottomTabs={true}
      unselectedTintColor={theme.dark.navigation.inactiveColor}
      selectedTintColor={theme.base.navBarIcons}
      barTintColor={theme.dark.navigation.background}
      labelVisibilityMode='unlabeled'
    >
      <TabBarItem
        title='Home'
        image={require('../assets/images/nav-icons/home_inactive.png')}
        fontFamily={fonts.medium}
        fontSize={10}
      >
        <NavigationHandler stateNavigator={mainNavigator}>
          <NavigationStack>
            <Scene stateKey='home'>
              <Home />
            </Scene>
            <Scene stateKey='search'>
              <Home />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>

      <TabBarItem
        title='Home'
        image={require('../assets/images/nav-icons/settings_inactive.png')}
        fontFamily={fonts.medium}
        fontSize={10}
      >
        <NavigationHandler stateNavigator={mainNavigator}>
          <NavigationStack
            backgroundColor={() => (Platform.OS === 'android' ? 'rgba(255,255,255,0)' : 'white')}
          >
            <Scene stateKey='home'>
              <Home />
            </Scene>
            <Scene stateKey='search'>
              <Search />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </TabBarItem>
    </TabBar>
  );
};

export default BottomTabs;
