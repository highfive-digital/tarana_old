export type BaseColorType = 'primary' | 'secondary' | 'none';
export type XSizes = 'xxs' | 'xxl';
export type BaseSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpacingType = BaseSize | 'none' | 'xxl' | 'xxxl' | '4xl';
export type ThemeType = 'dark' | 'light';
export type FontFamilyWeightType = 'regular' | 'medium' | 'semibold' | 'bold';
export type TileSize = BaseSize | XSizes;
export type BorderRadius = SpacingType | 'none' | '5xl' | 'full';
export type FontSize = BaseSize | XSizes | 'base' | 'xxxl' | '4xl';

export type SVG = 'SEARCH' | 'HEART' | 'ARROW_RIGHT' | 'PLAY' | 'STOP';

export interface TileStyle {
  size: TileSize;
  radius: BorderRadius;
  titleFontSize: FontSize;
  subtitleFontSize: FontSize;
  titleFontWeight: FontFamilyWeightType;
  subTitleFontWeight: FontFamilyWeightType;
  gutterRight: SpacingType;
  gutterLeft: SpacingType;
}
