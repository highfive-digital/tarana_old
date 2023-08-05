import { type ReactElement } from 'react';
import { SView } from '~components';
import PaddedView from '~components/PaddedView/PaddedView';
import SectionHeader from '~components/SectionHeader/SectionHeader';
import TileContainer from '~containers/TileContainer/TileContainer';
import { spacing } from '~styles/utilities';

interface SectionContainerProps {
  headerConfig: {
    heading: string;
    onPress: () => void;
  };
  componentConfig: {
    component: 'TILE' | 'RADIO' | 'ARTIST' | 'RECENT';
    config: any;
    data: any;
    onPress: (item: any) => void;
  };
}

const SectionContainer: React.FC<SectionContainerProps> = ({ headerConfig, componentConfig }) => {
  return (
    <SView display='flex' flexDirection='column' gap={4} marginTop={spacing.lg}>
      <PaddedView paddingHorizontal='sm'>
        <SectionHeader heading={headerConfig?.heading} onPress={headerConfig?.onPress} />
      </PaddedView>
      {componentConfig.component === 'TILE' ? (
        <TileContainer
          config={componentConfig.config}
          data={componentConfig.data}
          onPress={componentConfig.onPress}
        />
      ) : (
        (null as unknown as ReactElement)
      )}
    </SView>
  );
};

export default SectionContainer;
