import React from 'react';
import { fontSize, spacing } from '~styles/utilities';
import { type FontSize } from '~types/components.types';
import SText from './SText/SText';

interface TitleSubtitleType {
  title: string;
  subTitle: string;
  titleFontSize?: FontSize;
  subtitleFontSize?: FontSize;
}

const TitleSubtitle: React.FC<TitleSubtitleType> = ({
  title,
  subTitle,
  titleFontSize = 'sm',
  subtitleFontSize = 'xs'
}) => {
  return (
    <>
      <SText
        paddingTop={spacing.xs}
        fontSize={fontSize[titleFontSize]}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: 1 }}
        family='semibold'
      >
        {title}
      </SText>
      <SText
        paddingTop={spacing.none}
        fontSize={fontSize[subtitleFontSize]}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: 1 }}
      >
        {subTitle}
      </SText>
    </>
  );
};

export default TitleSubtitle;
