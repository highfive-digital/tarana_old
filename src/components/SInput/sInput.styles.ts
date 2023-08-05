import { StyleSheet, type TextStyle } from 'react-native';
import { fonts } from '~styles/theme';
import { type FontFamilyWeightType } from '~types/components.types';

const getTextInputStyles = (family: FontFamilyWeightType = 'regular', rest: TextStyle) => {
  const styles = StyleSheet.create({
    textInput: {
      fontFamily: fonts[family],
      ...rest
    }
  });

  return { styles };
};

export default getTextInputStyles;
