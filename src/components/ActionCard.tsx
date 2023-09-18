import { theme } from '~styles';
import { fontSize, spacing } from '~styles/utilities';
import SPressable from './SPressable/SPressable';
import SText from './SText/SText';
import SVGIcon from './SVGIcon';
import SView from './SView/SView';

const ActionCard = ({ text, onPress }: { text: string; onPress: (term: string) => void }) => {
  return (
    <SPressable
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      paddingVertical={spacing.lg}
      alignItems='center'
      pressableConfig={{
        onPress: () => {
          onPress(text);
        }
      }}
    >
      <SView display='flex' flexDirection='row' gap={spacing.sm} alignItems='center'>
        <SVGIcon icon='HISTORY' height={20} width={20} fill={theme.dark.text.secondary} />
        <SText fontSize={fontSize.base} fontFamilyWeight='medium'>
          {text}
        </SText>
      </SView>
      <SVGIcon icon='RECENT_SEARCH' height={24} width={24} fill={theme.dark.text.primary} />
    </SPressable>
  );
};

export default ActionCard;
