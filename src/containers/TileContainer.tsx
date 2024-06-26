import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { Tile } from '~components';
import { type TileStyle } from '~types/components.types';

interface TileContainerProps {
  data: any;
  config: any;
  styleConfig: TileStyle;
  onPress: (item: any) => void;
}

const TileContainer: React.FC<TileContainerProps> = ({ data, config, onPress, styleConfig }) => {
  return (
    <FlashList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <Tile
            data={item}
            config={config}
            onPress={onPress}
            styleConfig={{
              ...styleConfig,
              gutterLeft: index === 0 ? 'md' : 'none',
              gutterRight: index === data.length - 1 ? 'lg' : 'md'
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
