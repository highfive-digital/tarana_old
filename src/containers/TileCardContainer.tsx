import { SView, TileCard } from '~components';
import { isValidArray } from '~helpers/validators';
import { theme } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';

interface TileCardContainerProps {
  data: any;
  config: any;
  onPress: (item: any) => void;
}

const TileCardContainer: React.FC<TileCardContainerProps> = ({ data, config, onPress }) => {
  return (
    <SView
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignItems='center'
      columnGap={spacing.sm}
      rowGap={spacing.sm}
      backgroundColor={theme.dark.background.card}
      borderRadius={borderRadius.xl}
      paddingVertical={spacing.sm}
    >
      {isValidArray(data)
        ? data.map((item: any, idx: number) => (
            <TileCard key={idx} config={config} onPress={onPress} data={item} />
          ))
        : null}
    </SView>
  );
};

export default TileCardContainer;
