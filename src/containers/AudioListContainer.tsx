import { FlashList } from '@shopify/flash-list';
import { AudioListItem } from '~components';
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
      renderItem={({ item }) => {
        return <AudioListItem data={item} config={config} onPress={onPress} />;
      }}
      estimatedItemSize={66}
    />
  );
};

export default AudioListContainer;
