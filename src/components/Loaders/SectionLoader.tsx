import SView from '~components/SView/SView';
import { PaddedView } from '~containers';
import { spacing } from '~styles/utilities';
import { type TileStyle } from '~types/components.types';
import SectionHeaderLoader from './SectionHeaderLoader';
import TileLoader from './TileLoader';

const SectionLoader = ({ styleConfig, count }: { styleConfig: TileStyle; count: number }) => {
  return (
    <SView display='flex' flexDirection='column' gap={spacing.md}>
      <SectionHeaderLoader />
      <PaddedView paddingHorizontal='md'>
        <SView display='flex' flexDirection='row' gap={spacing.md}>
          {Array.from(Array(count).keys()).map((el) => (
            <TileLoader styleConfig={styleConfig} key={el} />
          ))}
        </SView>
      </PaddedView>
    </SView>
  );
};

export default SectionLoader;
