import { NavigationContext } from 'navigation-react';
import { Fragment, useContext } from 'react';
import Greetings from '~components/Greetings';
import { ScreenContainer, SectionContainer } from '~containers';
import LoaderContainer from '~containers/LoaderContainer';
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

  const {
    data: cityData,
    isSuccess,
    isError,
    status
  } = useFetch({
    queryKey: ['home'],
    queryFn: async () => await endpoints.getStationsByLocationType('city', 'mumbai')
  });

  return (
    <ScreenContainer type='SCROLL_VIEW'>
      <Greetings name='Ashish' />
      {isSuccess && !isError && status === 'success' ? (
        <Fragment>
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
        <LoaderContainer type='SECTION_CONTAINER' styleConfig={BASE_RADIO_CONFIG} count={4} />
      )}
    </ScreenContainer>
  );
};

export default Home;
