import { colors } from '~styles';
import { fontSize, spacing } from '~styles/utilities';
import SPressable from './SPressable/SPressable';
import SText from './SText/SText';
import SVGIcon from './SVGIcon';
import SView from './SView/SView';

const ActionCard = ({ text }: { text: string }) => {
  return (
    <SPressable>
      <SView
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        paddingVertical={spacing.lg}
        alignItems='center'
      >
        <SText fontSize={fontSize.base}>{text}</SText>
        <SVGIcon icon='RECENT_SEARCH' height={16} width={16} fill={colors.white[700]} />
      </SView>
    </SPressable>
  );
};

export default ActionCard;
