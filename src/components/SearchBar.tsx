import { useRef, useState, type ReactElement } from 'react';
import { Keyboard } from 'react-native';
import { type TextInput } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';
import SInput from '~components/SInput/SInput';
import SPressable from '~components/SPressable/SPressable';
import SVGIcon from '~components/SVGIcon';
import SView from '~components/SView/SView';
import PaddedView from '~containers/PaddedView';
import { theme } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';

interface SearchBarProps {
  onChange: (text: string) => void;
  onEnter: (text: string) => void;
  onClear?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, onEnter }) => {
  const [state, setState] = useState(true);
  const [term, setTerm] = useState('');
  const inputRef = useRef<TextInput | any>(null);

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
            <SView
              display='flex'
              flexDirection='row'
              justifyContent='flex-start'
              alignItems='center'
              backgroundColor={theme.dark.background.card}
              borderRadius={borderRadius.full}
            >
              <SInput
                width='90%'
                ref={inputRef}
                paddingHorizontal={spacing.xl}
                paddingVertical={spacing.md}
                fontSize={fontSize.md}
                height={50}
                color={theme.dark.text.primary}
                textInputConfig={{
                  placeholder: 'Search your favorite station',
                  placeholderTextColor: theme.dark.text.primary,
                  onChangeText(text: string) {
                    onChange(text);
                    // to make sure the  re-render does not happen multiple times
                    if (text.length === 1 || text.length === 0) {
                      setTerm(text);
                    }
                  },
                  onSubmitEditing(e) {
                    onEnter(e.nativeEvent.text);
                  }
                }}
              />
              {term.length ? (
                <SPressable
                  pressableConfig={{
                    onPress: () => {
                      inputRef.current.clear();
                      setTerm('');
                    }
                  }}
                  padding={spacing.xxs}
                >
                  <SVGIcon icon='CLOSE' height={20} width={20} fill={theme.dark.text.primary} />
                </SPressable>
              ) : (
                (null as unknown as ReactElement)
              )}
            </SView>
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
