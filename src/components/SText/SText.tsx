import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { type BaseColorType, type FontFamilyWeightType } from '~types/components.types';
import getTextStyles from './sText.styles';

interface STextProps {
  children: React.ReactNode | undefined;
  color?: BaseColorType;
  fontFamilyWeight?: FontFamilyWeightType; // FontFamilyWeight is for mitigation react native falling back to default font when fontweight is set
  textConfig?: TextProps;
}
const SText: React.FC<STextProps & TextStyle> = (props) => {
  const { children, color = 'secondary', fontFamilyWeight, textConfig, ...rest } = props;
  const { styles } = getTextStyles('dark', color, fontFamilyWeight, rest); // use theme here
  return (
    <Text style={styles.text} {...textConfig}>
      {children}
    </Text>
  );
};

export default SText;
