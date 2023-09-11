import React from 'react';
import { type Priority } from 'react-native-fast-image';
import { SView } from '~components';
import SImage from '~components/Image/SImage';
import SPressable from '~components/SPressable/SPressable';
import TitleSubtitle from '~components/TitleSubtitle';
import { dataExtractor } from '~helpers/common';
import { borderRadius, spacing } from '~styles/utilities';
import { type TileStyle } from '~types/components.types';

const tileSizeMap = {
  xxs: {
    height: 40,
    width: 40
  },
  xs: {
    height: 60,
    width: 60
  },
  sm: {
    height: 80,
    width: 80
  },
  md: {
    height: 100,
    width: 100
  },
  lg: {
    height: 130,
    width: 130
  },
  xl: {
    height: 140,
    width: 140
  },
  xxl: {
    height: 160,
    width: 160
  }
};

interface TileConfig {
  data: any;
  config: any;
  imageFetchPriority?: Priority;
  styleConfig: TileStyle;
  onPress?: (item: any) => void;
}

const Tile: React.FC<TileConfig> = ({
  data,
  config,
  imageFetchPriority = 'normal',
  styleConfig = {
    size: 'md',
    radius: 'xs',
    titleFontSize: 'xs',
    subtitleFontSize: 'xs',
    titleFontWeight: 'semibold',
    subTitleFontWeight: 'regular',
    gutterRight: 'none',
    gutterLeft: 'none'
  },
  onPress = () => {}
}) => {
  const src = dataExtractor(data, config.posterImage);
  const title = dataExtractor(data, config.name);
  const subTitle = dataExtractor(data, config.city);
  const dominantColor = dataExtractor(data, config.dominantColor);

  return (
    <SPressable
      pressableConfig={{
        onPress: () => {
          onPress(data);
        }
      }}
      marginRight={spacing[styleConfig.gutterRight]}
      marginLeft={spacing[styleConfig.gutterLeft]}
    >
      <SView
        height={tileSizeMap[styleConfig.size].height}
        width={tileSizeMap[styleConfig.size].width}
        backgroundColor={dominantColor}
        borderRadius={borderRadius[styleConfig.radius]}
        overflow='hidden'
      >
        <SImage
          src={src}
          priority={imageFetchPriority}
          borderRadius={borderRadius[styleConfig.radius]}
          height={'100%'}
          width={'100%'}
          resizeMode='contain'
        />
      </SView>

      <SView width={tileSizeMap[styleConfig.size].width} height={44} paddingTop={spacing.sm}>
        <TitleSubtitle
          titleFontSize={styleConfig.titleFontSize}
          subtitleFontSize={styleConfig.subtitleFontSize}
          title={title}
          subTitle={subTitle}
          titleFontWeight={styleConfig.titleFontWeight}
          subTitleFontWeight={styleConfig.subTitleFontWeight}
        />
      </SView>
    </SPressable>
  );
};

export default Tile;
