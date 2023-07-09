import React from 'react';

import SText from './src/components/SText/SText';
import SView from './src/components/SView/SView';

const App = () => {
  return (
    <SView display='flex' justifyContent='center' flex={1} alignItems='center'>
      <SText fontSize={28} family='bold'>
        hello tarana v2
      </SText>
    </SView>
  );
};

export default App;
