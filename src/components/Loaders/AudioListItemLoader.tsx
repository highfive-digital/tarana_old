import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { PaddedView } from '~containers';
import { colors } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';

const AudioListItemLoader = () => {
  return (
    <PaddedView paddingHorizontal='md'>
      <SkeletonPlaceholder
        backgroundColor={colors.material[800]}
        highlightColor={colors.material[600]}
        speed={1200}
        shimmerWidth={240}
      >
        <SkeletonPlaceholder.Item
          overflow='hidden'
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          borderRadius={borderRadius.md}
          paddingVertical={spacing.xs}
          marginVertical={spacing.xs}
        >
          <SkeletonPlaceholder.Item
            display='flex'
            flexDirection='row'
            gap={spacing.md}
            width={'75%'}
            alignItems='center'
          >
            <SkeletonPlaceholder.Item borderRadius={borderRadius.xl} height={60} width={60} />

            <SkeletonPlaceholder.Item width={'90%'}>
              <SkeletonPlaceholder.Item marginTop={4} width={140} height={10} />
              <SkeletonPlaceholder.Item marginTop={4} width={100} height={10} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
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

export default AudioListItemLoader;
