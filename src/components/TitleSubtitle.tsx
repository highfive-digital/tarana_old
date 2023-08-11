import React from 'react';
import { fontSize, spacing } from '~styles/utilities';
import { type FontFamilyWeightType, type FontSize } from '~types/components.types';
import SText from './SText/SText';

interface TitleSubtitleType {
  title: string;
  subTitle: string;
  titleFontSize?: FontSize;
  subtitleFontSize?: FontSize;
  titleFontWeight?: FontFamilyWeightType;

  subTitleFontWeight?: FontFamilyWeightType;
}

const TitleSubtitle: React.FC<TitleSubtitleType> = ({
  title,
  subTitle,
  titleFontSize = 'sm',
  subtitleFontSize = 'xs',
  titleFontWeight = 'semibold',
  subTitleFontWeight = 'regular'
}) => {
  return (
    <>
      <SText
        fontSize={fontSize[titleFontSize]}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: 1 }}
        fontFamilyWeight={titleFontWeight}
        color='primary'
      >
        {title}
      </SText>
      <SText
        paddingTop={spacing.none}
        fontSize={fontSize[subtitleFontSize]}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: 1 }}
        fontFamilyWeight={subTitleFontWeight}
      >
        {subTitle}
      </SText>
    </>
  );
};

export default TitleSubtitle;
