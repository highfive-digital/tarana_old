import { colors } from '~styles';
import { type ChipProps } from '~types/components.types';

export const BASE_RADIO_CONFIG: any = {
  size: 'xl',
  radius: 'md',
  titleFontSize: 'sm',
  subtitleFontSize: 'xs',
  titleFontWeight: 'semibold',
  subTitleFontWeight: 'regular'
};

export const ARTIST_RADIO_CONFIG: any = {
  size: 'xl',
  radius: 'lg',
  titleFontSize: 'sm',
  subtitleFontSize: 'xs',
  titleFontWeight: 'semibold',
  subTitleFontWeight: 'regular'
};

export const searchChipConfig: ChipProps[] = [
  {
    textConfig: {
      text: 'New Additions',
      fontSize: 'sm',
      fontWeight: 'medium'
    },
    iconConfig: {
      icon: 'NEW',
      height: 20,
      width: 20,
      fill: colors.white[700]
    },
    onPress: () => {
      console.log('pressed chip');
    }
  },
  {
    textConfig: {
      text: 'Trending',
      fontSize: 'sm',
      fontWeight: 'medium'
    },
    iconConfig: {
      icon: 'TRENDING',
      height: 20,
      width: 20,
      fill: colors.white[700]
    },
    onPress: () => {
      console.log('pressed chip');
    }
  },
  {
    textConfig: {
      text: 'Most Played',
      fontSize: 'sm',
      fontWeight: 'medium'
    },
    iconConfig: {
      icon: 'HEADPHONE',
      height: 20,
      width: 20,
      fill: colors.white[700]
    },
    onPress: () => {
      console.log('pressed chip');
    }
  },
  {
    textConfig: {
      text: 'Most Liked',
      fontSize: 'sm',
      fontWeight: 'medium'
    },
    iconConfig: {
      icon: 'HEART',
      height: 20,
      width: 20,
      fill: colors.white[700]
    },
    onPress: () => {
      console.log('pressed chip');
    }
  }
];
