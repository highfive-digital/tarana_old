import { ScrollView } from 'react-native';
import { spacing } from '~styles/utilities';

interface ScreenContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <ScrollView
      style={{ paddingTop: spacing.md }}
      contentContainerStyle={{ paddingBottom: spacing.scroll }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScreenContainer;
