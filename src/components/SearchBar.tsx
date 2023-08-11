import { useState } from 'react';
import { Keyboard } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import SInput from '~components/SInput/SInput';
import SPressable from '~components/SPressable/SPressable';
import SVGIcon from '~components/SVGIcon';
import SView from '~components/SView/SView';
import PaddedView from '~containers/PaddedView';
import { theme } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';

const SearchBar = () => {
  const [state, setState] = useState(true);
  return (
    <PaddedView paddingHorizontal='sm'>
      <SView display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
        <SView width={'85%'}>
          <OutsidePressHandler
            onOutsidePress={() => {
              Keyboard.dismiss();
              setState(true);
            }}
            disabled={state}
          >
            <SInput
              backgroundColor={theme.dark.background.card}
              borderRadius={borderRadius.full}
              paddingHorizontal={spacing.xl}
              paddingVertical={spacing.md}
              fontSize={fontSize.md}
              height={50}
              color={theme.dark.text.primary}
              textInputConfig={{
                placeholder: 'Search your favorite station',
                placeholderTextColor: theme.dark.text.primary,
                onFocus() {
                  setState(false);
                },
                onChangeText(text: string) {
                  console.log(text);
                }
              }}
            />
          </OutsidePressHandler>
        </SView>
        <SPressable
          backgroundColor={theme.dark.background.card}
          paddingHorizontal={spacing.md}
          paddingVertical={spacing.md}
          borderRadius={50}
          height={50}
          width={50}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <SVGIcon icon='SEARCH' height={24} width={24} fill={theme.dark.text.primary} />
        </SPressable>
      </SView>
    </PaddedView>
  );
};

export default SearchBar;
