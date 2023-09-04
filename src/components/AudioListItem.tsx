import { PaddedView } from '~containers';
import { dataExtractor } from '~helpers/common';
import { theme } from '~styles';
import { borderRadius, spacing } from '~styles/utilities';
import SButton from './Button';
import SImage from './Image/SImage';
import SPressable from './SPressable/SPressable';
import SView from './SView/SView';
import TitleSubtitle from './TitleSubtitle';

interface AudioListItemProps {
  data: any;
  config: any;
  onPress: (item: any) => void;
}

const AudioListItem: React.FC<AudioListItemProps> = ({ data, config, onPress }) => {
  const src = dataExtractor(data, config.posterImage);
  const title = dataExtractor(data, config.name);
  const subTitle = dataExtractor(data, config.city);
  const dominantColor = dataExtractor(data, config.dominantColor);

  return (
    <PaddedView paddingHorizontal='sm'>
      <SPressable
        overflow='hidden'
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        borderRadius={borderRadius.md}
        paddingVertical={spacing.xs}
        marginVertical={spacing.xs}
        pressableConfig={{
          onPress: () => {
            onPress(data);
          }
        }}
      >
        <SView
          display='flex'
          flexDirection='row'
          gap={spacing.md}
          width={'75%'}
          alignItems='center'
        >
          <SView backgroundColor={dominantColor} borderRadius={borderRadius.md}>
            <SImage
              src={src}
              height={50}
              width={50}
              borderRadius={borderRadius.md}
              resizeMode='contain'
            />
          </SView>
          <SView width={'90%'}>
            <TitleSubtitle
              title={title}
              subTitle={subTitle}
              titleFontSize='sm'
              subtitleFontSize='xs'
            />
          </SView>
        </SView>
        <SView
          display='flex'
          flexDirection='row'
          gap={spacing.md}
          transform={[{ rotate: '90deg' }]}
          height={40}
          width={40}
          justifyContent='center'
          alignItems='flex-start'
        >
          <SButton
            type='ICON'
            iconConfig={{ fillColor: theme.dark.text.primary, icon: 'MORE', size: 24 }}
            onPress={() => {
              console.log('ITEM PRESSED');
            }}
            styleConfig={{ height: 0, width: 0, gutterX: 'none', gutterY: 'none' }}
          />
        </SView>
      </SPressable>
    </PaddedView>
  );
};

export default AudioListItem;
