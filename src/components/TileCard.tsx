import SImage from '~components/Image/SImage';
import SPressable from '~components/SPressable/SPressable';
import { dataExtractor } from '~helpers/common';
import { borderRadius } from '~styles/utilities';

interface TileCardProps {
  data: any;
  config: any;
  onPress: (item: any) => void;
}

const TileCard: React.FC<TileCardProps> = ({ data, config, onPress }) => {
  const src = dataExtractor(data, config.posterImage);
  const title = dataExtractor(data, config.name);
  const subTitle = dataExtractor(data, config.city);
  const dominantColor = dataExtractor(data, config?.dominantColor) || 'transparent';
  return (
    <SPressable
      display='flex'
      borderRadius={borderRadius.xl}
      pressableConfig={{
        onPress: () => {
          onPress(data);
        }
      }}
      height={60}
      backgroundColor={dominantColor}
      overflow='hidden'
    >
      <SImage src={src} height={60} width={60} />
    </SPressable>
  );
};

export default TileCard;
