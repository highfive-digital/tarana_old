import SPressable from '~components/SPressable/SPressable';
import SText from '~components/SText/SText';
import SVGIcon from '~components/SVGIcon/SVGIcon';
import SView from '~components/SView/SView';
import { theme } from '~styles';

interface SectionHeaderProps {
  heading: string;
  onPress: () => void;
  route?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading = 'Section Heading',
  onPress,
  route
}) => {
  return (
    <SView display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
      <SText fontSize={20} family='medium' color='secondary'>
        {heading}
      </SText>
      <SPressable
        backgroundColor='transparent'
        width={40}
        paddingVertical={12}
        borderRadius={50}
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
        pressableConfig={{
          onPress: () => {
            onPress();
            if (route) {
              console.log(route);
            }
          }
        }}
      >
        <SVGIcon icon='ARROW_RIGHT' height={22} width={22} fill={theme.dark.text.secondary} />
      </SPressable>
    </SView>
  );
};

export default SectionHeader;
