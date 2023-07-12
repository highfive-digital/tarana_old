import React from 'react';

import SText from '~components/SText/SText';
import Tile from '~components/Tile/Tile';
import useListener from '~helpers/hooks/useListeners.hooks';
import SView from './src/components/SView/SView';

const App = () => {
  const { notify, state } = useListener('add', 1);

  return (
    <SView display='flex' justifyContent='center' flex={1} alignItems='center'>
      <SText fontSize={16} family='medium'>
        Tarana v{state}
      </SText>
      <Tile
        src={
          'https://c.saavncdn.com/editorial/BestOfRomanceHindi_20230701031821.jpg?bch=1688183318'
        }
        size='xl'
        radius='xs'
        titleFontSize='sm'
        onClick={() => {
          notify('add', (state as number) + 1);
        }}
      />
    </SView>
  );
};

export default App;
