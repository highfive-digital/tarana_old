import SearchBar from '~components/SearchBar/SearchBar';
import ScreenContainer from '~containers/ScreenContainer/ScreenContainer';
import SectionContainer from '~containers/SectionContainer/SectionContainer';
import { getTrackFromMetaData } from '~helpers/common';
import { RADIO_TRACK_CONFIG, TILE_CONFIG } from '~helpers/data.config';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import data from '../assets/static/working_stations.json';

const Home = () => {
  const { player } = initializeConfig();

  const addAndPlay = (track: Track) => {
    const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
    player
      .add([cleanedTrack])
      .then((res) => {
        console.log(res);
        player.play();
      })
      .catch(() => {
        console.log('play failed');
      });
  };
  return (
    <ScreenContainer>
      <SearchBar />
      <SectionContainer
        headerConfig={{
          heading: 'Popular Stations',
          onPress: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          data: data.slice(85, 100),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />
      <SectionContainer
        headerConfig={{
          heading: 'Favorites',
          onPress: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          data: data.slice(12, 22),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />

      <SectionContainer
        headerConfig={{
          heading: 'Recently Played',
          onPress: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          data: data.slice(22, 30),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />
      <SectionContainer
        headerConfig={{
          heading: 'Artist Stations',
          onPress: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
          data: data.slice(30, 42),
          onPress: (item: Track) => {
            addAndPlay(item);
          }
        }}
      />
      <SectionContainer
        headerConfig={{
          heading: 'Artist Stations',
          onPress: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        componentConfig={{
          component: 'TILE',
          config: TILE_CONFIG,
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
