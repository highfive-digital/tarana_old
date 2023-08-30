import SImage from '~components/Image/SImage';
import SPressable from '~components/SPressable/SPressable';
import SView from '~components/SView/SView';
import TitleSubtitle from '~components/TitleSubtitle';
import { dataExtractor } from '~helpers/common';
import { theme } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';

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
      backgroundColor={theme.dark.background.card}
      padding={spacing.sm}
      display='flex'
      borderRadius={borderRadius.md}
      flexDirection='row'
      gap={spacing.sm}
      width={'48%'}
      pressableConfig={{
        onPress: () => {
          onPress(data);
        }
      }}
      borderStartColor={dominantColor}
    >
      <SImage src={src} height={44} width={44} borderRadius={borderRadius.md} />
      <SView width={90} display='flex' alignSelf='center'>
        <TitleSubtitle title={title} subTitle={subTitle} titleFontSize='sm' subtitleFontSize='xs' />
      </SView>
    </SPressable>
  );
};

export default TileCard;
