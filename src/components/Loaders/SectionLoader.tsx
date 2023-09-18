import SView from '~components/SView/SView';
import { PaddedView } from '~containers';
import LoaderContainer from '~containers/LoaderContainer';
import { spacing } from '~styles/utilities';
import { type TileStyle } from '~types/components.types';
import SectionHeaderLoader from './SectionHeaderLoader';

const SectionLoader = ({ styleConfig }: { styleConfig: TileStyle }) => {
  return (
    <SView display='flex' flexDirection='column' gap={spacing.md}>
      <SectionHeaderLoader />
      <PaddedView paddingHorizontal='sm'>
        <SView display='flex' flexDirection='row' gap={spacing.md}>
          <LoaderContainer type='TILE' count={3} styleConfig={styleConfig} />
        </SView>
      </PaddedView>
    </SView>
  );
};

export default SectionLoader;
