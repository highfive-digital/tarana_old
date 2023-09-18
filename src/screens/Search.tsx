import React, { useState } from 'react';
import { SView, SearchBar } from '~components';
import { PaddedView, ScreenContainer, SectionContainer } from '~containers';
import AudioListContainer from '~containers/AudioListContainer';
import ChipListContainer from '~containers/ChipListContainer';
import LoaderContainer from '~containers/LoaderContainer';
import { findDuplicatesAndRemove, getTrackFromMetaData } from '~helpers/common';
import { searchChipConfig } from '~helpers/component.config';
import { CITY_RADIO_TILE_CONFIG, RADIO_TRACK_CONFIG } from '~helpers/data.config';
import useFetch from '~helpers/hooks/useFetch';
import { initializeConfig } from '~helpers/intialize.config';
import { isValidArray } from '~helpers/validators';
import endpoints from '~modules/network/endpoints';
import { type Track } from '~modules/player/player.types';
import { spacing } from '~styles/utilities';

const { player, storage } = initializeConfig();

const addAndPlay = (track: Track) => {
  const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
  player.addAndPlay([cleanedTrack]);
};

const Search = () => {
  const searchHistory = storage.get('search_history', 'array');
  const [searchTerm, setSearchTerm] = useState('');
  const { data, refetch, isLoading } = useFetch({
    queryKey: [`search_${searchTerm}`],
    queryFn: async () => await endpoints.searchStation(searchTerm, 20, 0),
    shouldFetchOnLoad: false
  });

  const saveHistory = () => {
    if (isValidArray(searchHistory)) {
      const appendedData = findDuplicatesAndRemove(
        [{ text: searchTerm }, ...searchHistory],
        'text',
        5
      );
      storage.set('search_history', appendedData, 'object');
    } else {
      storage.set('search_history', [{ text: searchTerm }], 'object');
    }
  };

  const refetchData = async () => {
    await refetch().then(({ isRefetchError, data: respData }) => {
      if (!isRefetchError && isValidArray(respData?.data) && searchTerm.length) {
        saveHistory();
      }
    });
  };

  const onChange = (term: string) => {
    setSearchTerm(term);
  };

  const onEnter = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refetchData().then(() => {
      console.log('RE_FETCH DONE');
    });
  };

  const onSearchHistoryActionPress = (text: string) => {
    onChange(text);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  return (
    <ScreenContainer>
      <PaddedView paddingVertical='md'>
        <SearchBar onChange={onChange} onEnter={onEnter} searchTerm={searchTerm} />
      </PaddedView>
      <ChipListContainer chipConfig={searchChipConfig} />
      {isLoading ? (
        <LoaderContainer type='AUDIO_LIST' count={6} />
      ) : (
        <React.Fragment>
          {isValidArray(data?.data) && searchTerm.length ? (
            <SView display='flex' flex={1} paddingVertical={spacing.md}>
              <AudioListContainer
                data={data?.data}
                config={CITY_RADIO_TILE_CONFIG}
                onPress={(item: Track) => {
                  addAndPlay(item);
                }}
              />
            </SView>
          ) : (
            <React.Fragment>
              {isValidArray(searchHistory) && (
                <SectionContainer
                  headerConfig={{
                    heading: 'Recently Searched'
                  }}
                  componentConfig={{
                    component: 'SEARCH_HISTORY',
                    data: searchHistory,
                    config: null,
                    styleConfig: null,
                    onPress: onSearchHistoryActionPress
                  }}
                />
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </ScreenContainer>
  );
};

export default Search;
