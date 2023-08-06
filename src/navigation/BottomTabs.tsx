import { NavigationHandler } from 'navigation-react';
import { NavigationBar, NavigationStack, Scene, TabBar, TabBarItem } from 'navigation-react-native';
import { Platform } from 'react-native';
import Home from '~screens/Home';
import Search from '~screens/Search';
import Settings from '~screens/Settings';
import ViewAll from '~screens/ViewAll';
import { theme } from '~styles';
import { fonts } from '~styles/theme';
import { homeNavigator, searchNavigator, settingsNavigator } from './stateNavigators';

const BottomTabs = () => {
  return (
    <>
      <NavigationBar hidden={true} />
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
          <NavigationHandler stateNavigator={homeNavigator}>
            <NavigationStack
              backgroundColor={() =>
                Platform.OS === 'android' ? theme.dark.background.primary : 'white'
              }
            >
              <Scene stateKey='home'>
                <Home />
              </Scene>
              <Scene stateKey='viewAll'>
                <ViewAll />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>

        <TabBarItem
          title='Search'
          image={require('../assets/images/nav-icons/search_inactive.png')}
          fontFamily={fonts.medium}
          fontSize={10}
        >
          <NavigationHandler stateNavigator={searchNavigator}>
            <NavigationStack
              backgroundColor={() =>
                Platform.OS === 'android' ? theme.dark.background.primary : 'white'
              }
            >
              <Scene stateKey='search'>
                <Search />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>
        <TabBarItem
          title='Settings'
          image={require('../assets/images/nav-icons/settings_inactive.png')}
          fontFamily={fonts.medium}
          fontSize={10}
        >
          <NavigationHandler stateNavigator={settingsNavigator}>
            <NavigationStack
              backgroundColor={() =>
                Platform.OS === 'android' ? theme.dark.background.primary : 'white'
              }
            >
              <Scene stateKey='settings'>
                <Settings />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>
      </TabBar>
    </>
  );
};

export default BottomTabs;
