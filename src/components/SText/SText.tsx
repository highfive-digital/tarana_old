import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { type BaseColorType, type FontFamilyWeightType } from '~types/components.types';
import getTextStyles from './sText.styles';

interface STextProps {
  children: string;
  color?: BaseColorType;
  family?: FontFamilyWeightType;
  textConfig?: TextProps;
}
const SText: React.FC<STextProps & TextStyle> = (props) => {
  const { children, color, family, textConfig, ...rest } = props;
  const { styles } = getTextStyles('dark', color, family, rest); // use theme here
  return (
    <Text style={styles.text} {...textConfig}>
      {children}
    </Text>
  );
};

export default SText;
