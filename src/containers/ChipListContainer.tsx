import { FlashList } from '@shopify/flash-list';
import { SView } from '~components';
import Chip from '~components/Chip';
import { spacing } from '~styles/utilities';
import { type ChipProps } from '~types/components.types';
import PaddedView from './PaddedView';

interface ChipListProps {
  chipConfig: ChipProps[];
}

const ChipListContainer: React.FC<ChipListProps> = ({ chipConfig }) => {
  return (
    <PaddedView paddingHorizontal='md'>
      <FlashList
        data={chipConfig}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <SView marginRight={index === chipConfig.length - 1 ? spacing.none : spacing.xs}>
              <Chip
                textConfig={item.textConfig}
                iconConfig={item.iconConfig}
                onPress={item.onPress}
              />
            </SView>
          );
        }}
        estimatedItemSize={40}
      />
    </PaddedView>
  );
};

export default ChipListContainer;
