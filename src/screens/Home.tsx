import { NavigationContext } from 'navigation-react';
import { useContext } from 'react';
import { SearchBar } from '~components';
import { ScreenContainer, SectionContainer } from '~containers';
import { getTrackFromMetaData } from '~helpers/common';
import { ARTIST_RADIO_CONFIG, BASE_RADIO_CONFIG } from '~helpers/component.config';
import { RADIO_TRACK_CONFIG, TILE_CONFIG } from '~helpers/data.config';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import data from '../assets/static/working_stations.json';

const Home = () => {
  const { player } = initializeConfig();
  player.attachEventListeners();
  const { stateNavigator } = useContext(NavigationContext);

  const addAndPlay = (track: Track) => {
    const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
    player.addAndPlay([cleanedTrack]);
  };
  return (
    <ScreenContainer>
      <SearchBar />
      <SectionContainer
        headerConfig={{
          heading: 'Your Favorites',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'RECENT',
          config: TILE_CONFIG,
          data: data.slice(101, 105),
          styleConfig: BASE_RADIO_CONFIG,
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Artist Stations',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          styleConfig: ARTIST_RADIO_CONFIG,
          data: data.slice(30, 42),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Popular Stations',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          data: data.slice(85, 100),
          styleConfig: BASE_RADIO_CONFIG,
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Trending Stations',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          styleConfig: BASE_RADIO_CONFIG,

          data: data.slice(12, 22),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Recently Played',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          styleConfig: BASE_RADIO_CONFIG,
          data: data.slice(22, 30),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Artist Stations',
          onPress: () => {
            stateNavigator.navigate('viewAll');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          styleConfig: BASE_RADIO_CONFIG,
          data: data.slice(42, 52),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />
    </ScreenContainer>
  );
};

export default Home;
