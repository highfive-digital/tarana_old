import React, { type ReactElement } from 'react';
import AudioListItemLoader from '~components/Loaders/AudioListItemLoader';
import SectionHeaderLoader from '~components/Loaders/SectionHeaderLoader';
import SectionLoader from '~components/Loaders/SectionLoader';
import TileLoader from '~components/Loaders/TileLoader';
import { type TileStyle } from '~types/components.types';

interface LoaderProps {
  type: 'SECTION_CONTAINER' | 'SECTION_HEADER' | 'ACTION_CARD' | 'AUDIO_LIST' | 'TILE';
  count: number;
  styleConfig?: TileStyle;
}

const LoaderContainer: React.FC<LoaderProps> = ({ type, count = 1, styleConfig }) => {
  return (
    <React.Fragment>
      {type === 'SECTION_CONTAINER'
        ? Array.from(Array(count).keys()).map((_, idx) => (
            <SectionLoader styleConfig={styleConfig as TileStyle} key={idx} count={count} />
          ))
        : (null as unknown as ReactElement)}

      {type === 'SECTION_HEADER'
        ? Array.from(Array(count).keys()).map((_, idx) => <SectionHeaderLoader key={idx} />)
        : (null as unknown as ReactElement)}

      {type === 'AUDIO_LIST'
        ? Array.from(Array(count).keys()).map((_, idx) => <AudioListItemLoader key={idx} />)
        : (null as unknown as ReactElement)}

      {type === 'TILE'
        ? Array.from(Array(count).keys()).map((_, idx) => (
            <TileLoader styleConfig={styleConfig as TileStyle} key={idx} />
          ))
        : (null as unknown as ReactElement)}
    </React.Fragment>
  );
};

export default LoaderContainer;
