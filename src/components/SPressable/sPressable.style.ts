import { StyleSheet, type ViewStyle } from 'react-native';
import { fonts, theme } from '~styles/theme';
import { type FontFamilyWeightType, type ThemeType } from '~types/components.types';

const getPressAbleStyles = (
  currentTheme: ThemeType = 'dark',
  backgroundColor: string,
  family: FontFamilyWeightType = 'regular',
  rest: ViewStyle
) => {
  const styles = StyleSheet.create({
    pressableStyles: {
      backgroundColor: backgroundColor || theme[currentTheme].background.primary,
      fontFamily: fonts[family],
      ...rest
    }
  });

  return { styles };
};

export default getPressAbleStyles;
