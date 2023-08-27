import { SView } from '~components';
import SearchBar from '~components/SearchBar';
import AudioListContainer from '~containers/AudioListContainer';
import { getTrackFromMetaData } from '~helpers/common';
import { RADIO_TRACK_CONFIG, TILE_CONFIG } from '~helpers/data.config';
import { initializeConfig } from '~helpers/intialize.config';
import { type Track } from '~modules/player/player.types';
import data from '../assets/static/working_stations.json';

const { player } = initializeConfig();

const Search = () => {
  const addAndPlay = (track: Track) => {
    const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
    player.addAndPlay([cleanedTrack]);
  };
  return (
    <>
      <SearchBar />
      <SView display='flex' flex={1}>
        <AudioListContainer
          data={data.slice(100, 200)}
          config={TILE_CONFIG}
          onPress={(item: Track) => {
            addAndPlay(item);
          }}
        />
      </SView>
    </>
  );
};

export default Search;
