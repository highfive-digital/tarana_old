import { NavigationContext } from 'navigation-react';
import { Fragment, useContext } from 'react';
import { SText, SView, SearchBar } from '~components';
import { ScreenContainer, SectionContainer } from '~containers';
import { getTrackFromMetaData } from '~helpers/common';
import { BASE_RADIO_CONFIG } from '~helpers/component.config';
import { CITY_RADIO_TILE_CONFIG, RADIO_TRACK_CONFIG } from '~helpers/data.config';
import useFetch from '~helpers/hooks/useFetch';
import { initializeConfig } from '~helpers/intialize.config';
import endpoints from '~modules/network/endpoints';
import { type Track } from '~modules/player/player.types';

const { player } = initializeConfig();
const addAndPlay = (track: Track) => {
  const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
  player.addAndPlay([cleanedTrack]);
};
const Home = () => {
  player.attachEventListeners();
  const { stateNavigator } = useContext(NavigationContext);

  const { data: cityData, isSuccess } = useFetch({
    queryKey: ['home'],
    queryFn: async () => await endpoints.getStationsByLocationType('city', 'mumbai')
  });

  return (
    <ScreenContainer>
      <SearchBar onChange={() => {}} onEnter={() => {}} />
      <SectionContainer
        headerConfig={{
          heading: 'Recently Played'
        }}
        componentConfig={{
          component: 'RECENT',
          config: CITY_RADIO_TILE_CONFIG,
          data: cityData?.data.slice(10, 20),
          styleConfig: BASE_RADIO_CONFIG,
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />
      {isSuccess ? (
        <Fragment>
          <SectionContainer
            headerConfig={{
              heading: 'Popular Stations',
              onPress: () => {
                stateNavigator.navigate('viewAll');
              }
            }}
            componentConfig={{
              component: 'TILE',
              config: CITY_RADIO_TILE_CONFIG,
              data: cityData?.data.slice(0, 10),
              styleConfig: BASE_RADIO_CONFIG,
              onPress: (item: Track) => {
                addAndPlay(item);
              }
            }}
          />
          <SectionContainer
            headerConfig={{
              heading: 'Nearby Stations',
              onPress: () => {
                stateNavigator.navigate('viewAll');
              }
            }}
            componentConfig={{
              component: 'TILE',
              config: CITY_RADIO_TILE_CONFIG,
              data: cityData?.data.slice(26, 36),
              styleConfig: BASE_RADIO_CONFIG,
              onPress: (item: Track) => {
                addAndPlay(item);
              }
            }}
          />
          <SectionContainer
            headerConfig={{
              heading: 'Recently Stations',
              onPress: () => {
                stateNavigator.navigate('viewAll');
              }
            }}
            componentConfig={{
              component: 'TILE',
              config: CITY_RADIO_TILE_CONFIG,
              data: cityData?.data.slice(36, 46),
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
              config: CITY_RADIO_TILE_CONFIG,
              data: cityData?.data.slice(71, 81),
              styleConfig: BASE_RADIO_CONFIG,
              onPress: (item: Track) => {
                addAndPlay(item);
              }
            }}
          />
        </Fragment>
      ) : (
        <SView>
          <SText>Loading</SText>
        </SView>
      )}
    </ScreenContainer>
  );
};

export default Home;
