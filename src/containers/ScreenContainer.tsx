import { ScrollView, StatusBar } from 'react-native';
import { SView } from '~components';
import { spacing } from '~styles/utilities';

interface ScreenContainerProps {
  children: React.ReactElement | React.ReactElement[];
  type?: 'VIEW' | 'SCROLL_VIEW';
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, type = 'VIEW' }) => {
  const margin = StatusBar.currentHeight ? StatusBar.currentHeight : 44;

  return type === 'SCROLL_VIEW' ? (
    <ScrollView
      style={{ marginTop: margin }}
      contentContainerStyle={{ paddingBottom: spacing.scroll, paddingTop: spacing.md }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <SView marginTop={margin} display='flex' flex={1} flexDirection='column'>
      {children}
    </SView>
  );
};

export default ScreenContainer;
