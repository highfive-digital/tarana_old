import React from 'react';
import { SView } from '~components';
import SText from '~components/SText/SText';

const Search = () => {
  return (
    <SView
      display='flex'
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor={'red'}
    >
      <SText
        textConfig={{
          onPress: () => {
            console.log('Hello');
          }
        }}
      >
        Hello Search Page
      </SText>
    </SView>
  );
};

export default Search;
