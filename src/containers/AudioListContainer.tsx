import { FlashList } from '@shopify/flash-list';
import { AudioListItem, SView } from '~components';
import { colors } from '~styles';
import { spacing } from '~styles/utilities';

interface AudioListContainerProps {
  data: any;
  config: any;
  onPress: (item: any) => void;
}

const AudioListContainer: React.FC<AudioListContainerProps> = ({ data, config, onPress }) => {
  return (
    <FlashList
      data={data}
      contentContainerStyle={{ paddingBottom: spacing.scroll }}
      renderItem={({ item, index }) => {
        return (
          <SView backgroundColor={index % 2 === 0 ? colors.black[800] : 'transparent'}>
            <AudioListItem data={item} config={config} onPress={onPress} />
          </SView>
        );
      }}
      estimatedItemSize={66}
    />
  );
};

export default AudioListContainer;
