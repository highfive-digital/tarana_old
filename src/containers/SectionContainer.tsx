import { type ReactElement } from 'react';
import { SView, SectionHeader } from '~components';
import { PaddedView, TileCardContainer, TileContainer } from '~containers';
import { spacing } from '~styles/utilities';
import { type TileStyle } from '~types/components.types';
import ActionCardContainer from './ActionCardContainer';

interface SectionContainerProps {
  headerConfig: {
    heading: string;
    onPress?: () => void;
  };
  componentConfig: {
    component: 'TILE' | 'RADIO' | 'ARTIST' | 'RECENT' | 'SEARCH_HISTORY';
    data: any;
    config: any;
    styleConfig: TileStyle | any;
    onPress: (item: any) => void;
  };
}

const SectionContainer: React.FC<SectionContainerProps> = ({ headerConfig, componentConfig }) => {
  return (
    <SView display='flex' flexDirection='column' gap={4} marginTop={spacing.lg}>
      <PaddedView paddingHorizontal='md'>
        <SectionHeader heading={headerConfig?.heading} onPress={headerConfig?.onPress} />
      </PaddedView>
      {componentConfig.component === 'TILE' ? (
        <TileContainer
          config={componentConfig.config}
          data={componentConfig.data}
          styleConfig={componentConfig.styleConfig}
          onPress={componentConfig.onPress}
        />
      ) : (
        (null as unknown as ReactElement)
      )}
      {componentConfig.component === 'RECENT' ? (
        <PaddedView paddingHorizontal='md'>
          <TileCardContainer
            config={componentConfig.config}
            data={componentConfig.data}
            onPress={componentConfig.onPress}
          />
        </PaddedView>
      ) : (
        (null as unknown as ReactElement)
      )}
      {componentConfig.component === 'SEARCH_HISTORY' ? (
        <PaddedView paddingHorizontal='md'>
          <ActionCardContainer
            actionCardData={componentConfig.data}
            onPress={componentConfig.onPress}
          />
        </PaddedView>
      ) : (
        (null as unknown as ReactElement)
      )}
    </SView>
  );
};

export default SectionContainer;
