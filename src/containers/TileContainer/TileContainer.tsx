import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Tile } from '~components';
import { BASE_RADIO_CONFIG } from '~helpers/component.config';

interface TileContainerProps {
  data: any;
  config: any;
  componentConfig?: any; // add component config here
  onPress: (item: any) => void;
}

const TileContainer: React.FC<TileContainerProps> = ({ data, config, onPress }) => {
  return (
    <FlashList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Tile
            data={item}
            config={config}
            key={index}
            onPress={onPress}
            styleConfig={{
              gutterLeft: index === 0 ? 'sm' : 'xs',
              gutterRight: index === data.length - 1 ? 'lg' : 'xs',
              ...BASE_RADIO_CONFIG
            }}
          />
        );
      }}
      estimatedItemSize={100}
      horizontal
    />
  );
};

export default TileContainer;
