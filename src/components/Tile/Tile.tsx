import React from 'react';
import { Pressable } from 'react-native';
import { type Priority } from 'react-native-fast-image';
import { SView } from '~components';
import SImage from '~components/Image/SImage';
import TitleSubtitle from '~components/TitleSubtitle';
import { borderRadius } from '~styles/utilities';
import { type BorderRadius, type FontSize, type TileSize } from '~types/components.types';

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
    height: 120,
    width: 120
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
  src: string;
  title: string;
  subTitle: string;
  size?: TileSize;
  priority?: Priority;
  radius?: BorderRadius;
  titleFontSize?: FontSize;
  subtitleFontSize?: FontSize;
  onClick?: () => void;
}

const Tile: React.FC<TileConfig> = ({
  src,
  title = '',
  subTitle = '',
  size = 'md',
  priority = 'normal',
  radius = 'xs',
  titleFontSize = 'sm',
  subtitleFontSize = 'xs',
  onClick = () => {}
}) => {
  return (
    <Pressable onPress={onClick}>
      <SView height={tileSizeMap[size].height} width={tileSizeMap[size].width}>
        <SImage
          src={src}
          priority={priority}
          borderRadius={borderRadius[radius]}
          height={'100%'}
          width={'100%'}
        />
      </SView>

      <SView width={tileSizeMap[size].width}>
        <TitleSubtitle
          titleFontSize={titleFontSize}
          subtitleFontSize={subtitleFontSize}
          title={title}
          subTitle={subTitle}
        />
      </SView>
    </Pressable>
  );
};

export default Tile;
