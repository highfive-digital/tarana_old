import React from 'react';
import FastImage, {
  type ImageStyle,
  type OnLoadEvent,
  type OnProgressEvent,
  type Priority,
  type ResizeMode
} from 'react-native-fast-image';
import getImagesStyles from './sImage.styles';

interface SImageProps {
  src: string;
  priority?: Priority;
  fallback?: boolean;
  resizeMode?: ResizeMode;
  imageStyles?: ImageStyle;
  onLoadStart?: () => void;
  onProgress?: (event: OnProgressEvent) => void;
  onLoad?: (event: OnLoadEvent) => void;
  onError?: () => void;
  onLoadEnd?: () => void;
  onPress?: () => void;
}

const SImage: React.FC<SImageProps & ImageStyle> = (props) => {
  const {
    src,
    priority = 'normal',
    fallback = false,
    onLoadStart,
    onError,
    onLoad,
    onLoadEnd,
    onProgress,
    resizeMode,
    ...imageStyles
  } = props;
  const { styles } = getImagesStyles(imageStyles);

  return (
    <FastImage
      source={{ uri: src, priority }}
      fallback={fallback}
      style={styles.image}
      onLoadStart={onLoadStart}
      onError={onError}
      onLoad={onLoad}
      onLoadEnd={onLoadEnd}
      onProgress={onProgress}
      resizeMode={resizeMode}
    />
  );
};

export default SImage;
