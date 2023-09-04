import React, { type ReactElement } from 'react';
import SPressable from '~components/SPressable/SPressable';
import SText from '~components/SText/SText';
import SVGIcon from '~components/SVGIcon';
import { colors } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';
import { type ChipProps } from '~types/components.types';

const Chip: React.FC<ChipProps> = ({
  textConfig = { text: 'Chip', fontSize: 'md', fontWeight: 'regular' },
  iconConfig,
  onPress = () => {}
}) => {
  return (
    <SPressable
      borderColor={colors.black[500]}
      borderWidth={1}
      paddingHorizontal={spacing.md}
      paddingVertical={spacing.sm}
      borderRadius={borderRadius.full}
      alignSelf='baseline'
      display='flex'
      flexDirection='row'
      gap={spacing.sm}
      pressableConfig={{
        onPress
      }}
    >
      {iconConfig?.icon ? (
        <SVGIcon
          icon={iconConfig.icon}
          height={iconConfig.height}
          width={iconConfig.width}
          fill={iconConfig.fill}
        />
      ) : (
        (null as unknown as ReactElement)
      )}
      <SText fontFamilyWeight={textConfig.fontWeight} fontSize={fontSize[textConfig.fontSize]}>
        {textConfig.text}
      </SText>
    </SPressable>
  );
};

export default Chip;
