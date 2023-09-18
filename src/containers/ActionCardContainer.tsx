import { Fragment } from 'react';
import ActionCard from '~components/ActionCard';

interface ActionCardContainerProps {
  actionCardData: Array<{ text: string }>;
  onPress: (text: string) => void;
}
const ActionCardContainer: React.FC<ActionCardContainerProps> = ({ actionCardData, onPress }) => {
  return (
    <Fragment>
      {actionCardData.map((data, idx) => (
        <ActionCard text={data.text} key={idx} onPress={onPress} />
      ))}
    </Fragment>
  );
};

export default ActionCardContainer;
