import { TextInput, type TextInputProps, type TextStyle } from 'react-native';
import { colors } from '~styles';
import { type FontFamilyWeightType } from '~types/components.types';
import getTextInputStyles from './sInput.styles';

interface SInputProps {
  color?: string;
  family?: FontFamilyWeightType;
  textInputConfig?: TextInputProps;
}

const SInput: React.FC<TextStyle & SInputProps> = (props) => {
  const { family, textInputConfig, ...rest } = props;
  const { styles } = getTextInputStyles(family, rest); // use theme here
  return (
    <TextInput
      placeholder='Search your favorite Station'
      style={styles.textInput}
      cursorColor={colors.red[600]}
      {...textInputConfig}
    />
  );
};

export default SInput;
