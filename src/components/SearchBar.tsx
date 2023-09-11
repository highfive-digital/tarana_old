import { useRef, useState, type ReactElement } from 'react';
import { Keyboard } from 'react-native';
import { type TextInput } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';
import SInput from '~components/SInput/SInput';
import SView from '~components/SView/SView';
import PaddedView from '~containers/PaddedView';
import { theme } from '~styles';
import { borderRadius, fontSize, spacing } from '~styles/utilities';
import SPressable from './SPressable/SPressable';
import SVGIcon from './SVGIcon';

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
      <SView display='flex' flexDirection='row' alignItems='center'>
        <OutsidePressHandler
          onOutsidePress={() => {
            Keyboard.dismiss();
            setState(true);
          }}
          disabled={state}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.dark.background.card,
            borderRadius: borderRadius.xl,
            alignItems: 'center',
            width: '100%'
          }}
        >
          <SInput
            ref={inputRef}
            width='80%'
            paddingHorizontal={spacing.md}
            paddingVertical={spacing.md}
            fontSize={fontSize.md}
            family='medium'
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
          <SPressable
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
        </OutsidePressHandler>
      </SView>
    </PaddedView>
  );
};

export default SearchBar;
