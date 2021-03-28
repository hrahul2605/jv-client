import React, { useState } from 'react';
import FlipMove from 'react-flip-move';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { Card, Text } from '../../atoms';
import { PollTimer } from '../../organisms';
import { Poll } from '../../../reducers/types';
import { prettyDateFormat } from '../../../utils';
import { StatusText } from '../../molecules';

interface Props extends Poll {
  mode: 'review' | 'vote';
  // eslint-disable-next-line no-unused-vars
  onVote?: (id: string, title: string) => void;
  voted?: string;
}

const PublishTemplate: React.FC<Props> = (props): React.ReactElement => {
  const {
    title,
    description,
    rivals,
    mode,
    onVote,
    voted,
    startTime,
    endTime,
  } = props;
  const [selected, setSelected] = useState(voted || '-1');
  const handleClick = (id: string, rivalTitle: string) => {
    if (!voted) {
      setSelected(id);
    }
    if (onVote) {
      onVote(id, rivalTitle);
    }
  };

  const className = classnames({ 'rivals-input-container': mode === 'review' });
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      {mode === 'review' && <StatusText text="Review Mode" status="success" />}
      {mode === 'vote' && <PollTimer startTime={startTime} endTime={endTime} />}
      <Text
        family="serif"
        type="display"
        size="lg"
        className="text-active mt-16 text-center"
      >
        {title}
      </Text>
      <Text size="sm" className="text-black mt-8 max-w-lg text-center">
        {description}
      </Text>
      {mode === 'review' && (
        <Text size="sm" className="text-line text-center">
          {`${dayjs(startTime).format(prettyDateFormat)} -
          ${dayjs(endTime).format(prettyDateFormat)}`}
        </Text>
      )}
      <Text size="lg" className="text-black text-center mt-12 mb-2">
        Vote for one please
      </Text>
      <FlipMove className={className}>
        {rivals.map(item => (
          <Card
            votes={item.votes}
            title={item.title}
            key={item.id || item.key}
            onClick={() => {
              if (item.id) handleClick(item.id, item.title);
              else if (item.key) handleClick(item.key, item.title);
            }}
            selected={
              voted
                ? voted === item.id
                : item.id === selected || item.key === selected
            }
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default PublishTemplate;
