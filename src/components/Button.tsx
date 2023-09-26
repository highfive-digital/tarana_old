import { type ReactElement } from 'react';
import { theme } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';
import {
  type BorderRadius,
  type FontFamilyWeightType,
  type FontSize,
  type SVG,
  type SpacingType
} from '~types/components.types';
import SPressable from './SPressable/SPressable';
import SText from './SText/SText';
import SVGIcon from './SVGIcon';

interface ButtonProps {
  onPress: () => void;
  type?: 'ICON' | 'DEFAULT';
  color?: string;
  styleConfig?: {
    height: number | number;
    width: number;
    gutterX: SpacingType;
    gutterY: SpacingType;
    borderRadius?: BorderRadius;
  };
  iconConfig?: {
    icon: SVG;
    size: number;
    fillColor: string;
  };
  textConfig?: {
    text: string;
    fontWeight: FontFamilyWeightType;
    fontSize: FontSize;
  };
}

const SButton: React.FC<ButtonProps> = ({
  type,
  onPress,
  color = 'transparent',
  styleConfig = {
    gutterX: 'md',
    gutterY: 'lg',
    height: 'auto',
    width: 'auto',
    borderRadius: 'xxl'
  },
  iconConfig = {
    icon: 'HEART',
    size: 24,
    fillColor: theme.dark.text.primary
  },
  textConfig = {
    text: '',
    fontSize: 'base',
    fontWeight: 'regular'
  }
}) => {
  return (
    <SPressable
      display='flex'
      justifyContent='center'
      alignItems='center'
      paddingHorizontal={spacing[styleConfig?.gutterX]}
      paddingVertical={spacing[styleConfig?.gutterX]}
      borderRadius={borderRadius[styleConfig.borderRadius as BorderRadius]}
      backgroundColor={color}
      pressableConfig={{
        onPress
      }}
    >
      {type === 'DEFAULT' ? (
        <SText fontFamilyWeight={textConfig?.fontWeight} fontSize={fontSize[textConfig.fontSize]}>
          {textConfig.text}
        </SText>
      ) : (
        (null as unknown as ReactElement)
      )}
      {type === 'ICON' ? (
        <SVGIcon
          icon={iconConfig.icon}
          height={iconConfig.size}
          width={iconConfig.size}
          fill={iconConfig.fillColor}
        />
      ) : (
        (null as unknown as ReactElement)
      )}
    </SPressable>
  );
};

export default SButton;
