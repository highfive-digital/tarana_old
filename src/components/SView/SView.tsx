import React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { type BaseColorType } from '~types/components.types';
import getViewStyles from './sView.style';

interface SViewProps {
  children: React.ReactElement | React.ReactElement[];
  color?: BaseColorType;
  viewConfig?: ViewProps;
}
const SView: React.FC<SViewProps & ViewStyle> = (props) => {
  const { children, color = 'none', viewConfig, ...rest } = props;
  const { styles } = getViewStyles('dark', color, rest); // use theme here
  return (
    <View style={styles.view} {...viewConfig}>
      {children}
    </View>
  );
};

export default SView;
