import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '~styles';
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
  styleConfig: TileStyle;
}

const TileLoader: React.FC<TileConfig> = ({
  styleConfig = {
    size: 'md',
    radius: 'xs',
    titleFontSize: 'xs',
    subtitleFontSize: 'xs',
    titleFontWeight: 'semibold',
    subTitleFontWeight: 'regular',
    gutterRight: 'none',
    gutterLeft: 'none'
  }
}) => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor={colors.material[800]}
      highlightColor={colors.material[600]}
      speed={1200}
      shimmerWidth={240}
    >
      <SkeletonPlaceholder.Item
        marginRight={spacing[styleConfig.gutterRight]}
        marginLeft={spacing[styleConfig.gutterLeft]}
      >
        <React.Fragment>
          <SkeletonPlaceholder.Item
            height={tileSizeMap[styleConfig.size].height}
            width={tileSizeMap[styleConfig.size].width}
            borderRadius={borderRadius[styleConfig.radius]}
            overflow='hidden'
          />

          <SkeletonPlaceholder.Item
            width={tileSizeMap[styleConfig.size].width}
            height={44}
            paddingTop={spacing.sm}
          >
            <SkeletonPlaceholder.Item marginTop={4} width={100} height={10} />
            <SkeletonPlaceholder.Item marginTop={4} width={70} height={10} />
          </SkeletonPlaceholder.Item>
        </React.Fragment>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export default TileLoader;
