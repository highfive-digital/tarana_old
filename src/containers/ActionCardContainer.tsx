import { Fragment } from 'react';
import ActionCard from '~components/ActionCard';

interface ActionCardContainerProps {
  historyData: Array<{ text: string }>;
}
const ActionCardContainer: React.FC<ActionCardContainerProps> = ({ historyData }) => {
  return (
    <Fragment>
      {historyData.map((data, idx) => (
        <ActionCard text={data.text} key={idx} />
      ))}
    </Fragment>
  );
};

export default ActionCardContainer;
