import SView from '~components/SView/SView';
import { spacing } from '~styles/utilities';
import { type SpacingType } from '~types/components.types';

interface PaddedViewProps {
  children: React.ReactElement | React.ReactElement[];
  paddingHorizontal?: SpacingType;
  paddingVertical?: SpacingType;
}

const PaddedView: React.FC<PaddedViewProps> = (props) => {
  const { children, paddingHorizontal = 'none', paddingVertical = 'none' } = props;
  return (
    <SView
      paddingHorizontal={spacing[paddingHorizontal]}
      paddingVertical={spacing[paddingVertical]}
      backgroundColor='transparent'
    >
      {children}
    </SView>
  );
};

export default PaddedView;
