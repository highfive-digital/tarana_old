import { type ReactElement } from 'react';
import { PaddedView } from '~containers';
import { getGreeting } from '~helpers/common';
import { tabActions } from '~states/tab';
import { theme } from '~styles';
import SButton from './Button';
import SText from './SText/SText';
import SView from './SView/SView';

const Greetings = ({ name }: { name: string }) => {
  const greeting = getGreeting();
  return (
    <PaddedView paddingHorizontal='md'>
      <SView display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
        <SView>
          <SText fontFamilyWeight='semibold' fontSize={16} color='secondary'>
            {greeting}
          </SText>
          {name ? (
            <SText fontFamilyWeight='bold' fontSize={20} color='primary'>
              {name}
            </SText>
          ) : (
            (null as unknown as ReactElement)
          )}
        </SView>
        <SButton
          type='ICON'
          iconConfig={{ icon: 'SEARCH', fillColor: theme.dark.text.primary, size: 24 }}
          styleConfig={{
            height: 40,
            width: 40,
            gutterX: 'sm',
            gutterY: 'sm',
            borderRadius: 'xxl'
          }}
          onPress={() => {
            tabActions.setTab(1);
          }}
        />
      </SView>
    </PaddedView>
  );
};

export default Greetings;
