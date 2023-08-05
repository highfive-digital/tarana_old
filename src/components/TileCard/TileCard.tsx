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
  return (
    <SPressable
      backgroundColor={theme.dark.background.card}
      padding={spacing.sm}
      display='flex'
      flexDirection='row'
      gap={spacing.sm}
      borderRadius={borderRadius.none}
      width={'48%'}
      pressableConfig={{
        onPress: () => {
          onPress(data);
        }
      }}
    >
      <SImage src={src} height={40} width={40} />
      <SView width={90}>
        <TitleSubtitle
          title={title}
          subTitle={subTitle}
          titleFontSize='base'
          subtitleFontSize='sm'
        />
      </SView>
    </SPressable>
  );
};

export default TileCard;
