import { Pressable, type PressableProps, type ViewStyle } from 'react-native';
import { type FontFamilyWeightType } from '~types/components.types';
import getPressAbleStyles from './sPressable.style';

interface SInputProps {
  children: React.ReactElement | React.ReactElement[];
  backgroundColor?: string;
  family?: FontFamilyWeightType;
  pressableConfig?: PressableProps;
}

const SPressable: React.FC<SInputProps & ViewStyle> = (props) => {
  const { backgroundColor = 'transparent', family, pressableConfig, children, ...rest } = props;

  const { styles } = getPressAbleStyles('dark', backgroundColor, family, rest);
  return (
    <Pressable style={styles.pressableStyles} {...pressableConfig}>
      {children}
    </Pressable>
  );
};

export default SPressable;
