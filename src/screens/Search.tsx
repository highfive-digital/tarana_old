import { FlashList } from '@shopify/flash-list';
import { Fragment, useState } from 'react';
import { SView, SearchBar } from '~components';
import Chip from '~components/Chip';
import { PaddedView, SectionContainer } from '~containers';
import AudioListContainer from '~containers/AudioListContainer';
import { getTrackFromMetaData } from '~helpers/common';
import { searchChipConfig } from '~helpers/component.config';
import { CITY_RADIO_TILE_CONFIG, RADIO_TRACK_CONFIG } from '~helpers/data.config';
import useFetch from '~helpers/hooks/useFetch';
import { initializeConfig } from '~helpers/intialize.config';
import { isValidArray } from '~helpers/validators';
import endpoints from '~modules/network/endpoints';
import { type Track } from '~modules/player/player.types';
import { spacing } from '~styles/utilities';

const { player } = initializeConfig();

const addAndPlay = (track: Track) => {
  const cleanedTrack = getTrackFromMetaData(track, RADIO_TRACK_CONFIG);
  player.addAndPlay([cleanedTrack]);
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, refetch } = useFetch({
    queryKey: [`search_${searchTerm}`],
    queryFn: async () => await endpoints.searchStation(searchTerm, 20, 0),
    shouldFetchOnLoad: false
  });

  const refetchData = async () => {
    await refetch();
  };

  const onChange = (term: string) => {
    setSearchTerm(term);
  };

  const onEnter = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refetchData().then(() => {
      console.log('fetch done');
    });
  };

  const recentSearch = [
    {
      text: 'Radio Zindagi'
    },
    {
      text: 'Akashvani Bangalore'
    },
    {
      text: 'Radio Mirchi'
    },
    {
      text: 'Bollywood FM'
    },
    {
      text: 'Big Radio'
    }
  ];

  return (
    <Fragment>
      <PaddedView paddingVertical='md'>
        <SearchBar onChange={onChange} onEnter={onEnter} />
      </PaddedView>
      <PaddedView paddingHorizontal='sm'>
        <FlashList
          data={searchChipConfig}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <SView
                marginRight={index === searchChipConfig.length - 1 ? spacing.none : spacing.xs}
              >
                <Chip
                  textConfig={item.textConfig}
                  iconConfig={item.iconConfig}
                  onPress={item.onPress}
                />
              </SView>
            );
          }}
          estimatedItemSize={40}
        />
      </PaddedView>
      {isValidArray(data?.data) ? (
        <Fragment>
          <SView display='flex' flex={1} paddingVertical={spacing.md}>
            <AudioListContainer
              data={data?.data}
              config={CITY_RADIO_TILE_CONFIG}
              onPress={(item: Track) => {
                addAndPlay(item);
              }}
            />
          </SView>
        </Fragment>
      ) : (
        <Fragment>
          <SectionContainer
            headerConfig={{
              heading: 'Recently Searched'
            }}
            componentConfig={{
              component: 'SEARCH_HISTORY',
              data: recentSearch,
              config: null,
              styleConfig: null,
              onPress: () => {}
            }}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Search;
