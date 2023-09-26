import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '~styles';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor={colors.material[900]}
      highlightColor={colors.material[800]}
      speed={1200}
    >
      <SkeletonPlaceholder.Item flexDirection='row' alignItems='center'>
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
