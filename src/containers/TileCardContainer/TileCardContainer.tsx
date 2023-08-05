import { SView } from '~components';
import TileCard from '~components/TileCard/TileCard';
import { isValidArray } from '~helpers/common';
import { spacing } from '~styles/utilities';

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
      justifyContent='flex-start'
      columnGap={spacing.sm}
      rowGap={spacing.sm}
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
