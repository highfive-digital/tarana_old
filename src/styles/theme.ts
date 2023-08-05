import { colors } from './colors';

export const theme = {
  base: {
    primary: colors.red[500],
    navBarIcons: colors.red[600]
  },
  light: {
    background: {
      primary: colors.white[500],
      secondary: colors.gray[500],
      card: colors.material[900],
      none: 'transparent'
    },
    text: {
      primary: colors.black[800],
      secondary: colors.gray[900],
      none: 'transparent'
    },
    button: {
      primary: colors.red[600],
      active: colors.red[700]
    },
    navigation: {
      background: colors.gray[300],
      inactiveColor: colors.black[800]
    }
  },
  dark: {
    background: {
      primary: colors.black[900],
      secondary: colors.material[800],
      card: colors.material[900],
      none: 'transparent'
    },
    text: {
      primary: colors.black[200],
      secondary: colors.black[300],
      none: 'transparent'
    },
    button: {
      primary: colors.red[700],
      active: colors.red[600]
    },
    navigation: {
      background: colors.black[900],
      inactiveColor: colors.black[200]
    }
  }
};

export const fonts = {
  regular: 'ChesnaGrotesk-Regular',
  medium: 'ChesnaGrotesk-Medium',
  semibold: 'ChesnaGrotesk-SemiBold',
  bold: 'ChesnaGrotesk-Bold'
};
