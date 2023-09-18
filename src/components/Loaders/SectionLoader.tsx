import SView from '~components/SView/SView';
import { PaddedView } from '~containers';
import { spacing } from '~styles/utilities';
import { type TileStyle } from '~types/components.types';
import SectionHeaderLoader from './SectionHeaderLoader';
import TileLoader from './TileLoader';

const SectionLoader = ({ styleConfig }: { styleConfig: TileStyle }) => {
  return (
    <SView display='flex' flexDirection='column' gap={spacing.md}>
      <SectionHeaderLoader />
      <PaddedView paddingHorizontal='sm'>
        <SView display='flex' flexDirection='row' gap={spacing.md}>
          <TileLoader styleConfig={styleConfig} />
          <TileLoader styleConfig={styleConfig} />
          <TileLoader styleConfig={styleConfig} />
        </SView>
      </PaddedView>
    </SView>
  );
};

export default SectionLoader;
