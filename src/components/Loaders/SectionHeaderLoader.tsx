import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { PaddedView } from '~containers';
import { colors } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';

const SectionHeaderLoader = () => {
  return (
    <PaddedView paddingHorizontal='md'>
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor={colors.material[800]}
        highlightColor={colors.material[600]}
        speed={1200}
        shimmerWidth={240}
      >
        <SkeletonPlaceholder.Item
          display='flex'
          flexDirection='row'
          width='100%'
          paddingTop={spacing.sm}
          justifyContent='space-between'
          alignItems='center'
        >
          <SkeletonPlaceholder.Item marginTop={4} width={100} height={20} />
          <SkeletonPlaceholder.Item
            marginTop={4}
            width={40}
            height={40}
            borderRadius={borderRadius.full}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </PaddedView>
  );
};

export default SectionHeaderLoader;
