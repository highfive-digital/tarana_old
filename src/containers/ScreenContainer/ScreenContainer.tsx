import { ScrollView } from 'react-native-gesture-handler';
import { spacing } from '~styles/utilities';

interface ScreenContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <ScrollView
      style={{ paddingTop: spacing.md }}
      contentContainerStyle={{ paddingBottom: spacing.scroll }}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;
