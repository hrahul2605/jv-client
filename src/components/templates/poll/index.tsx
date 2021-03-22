import React, { useState } from 'react';
import { Card, Text } from '../../atoms';
import { Rival } from '../../../reducers/types';

interface Props {
  title: string;
  description: string;
  rivals: Rival[];
  mode: 'review' | 'vote';
}

const PublishTemplate: React.FC<Props> = (props): React.ReactElement => {
  const { title, description, rivals, mode } = props;
  const [selected, setSelected] = useState('-1');
  const handleClick = (id: string) => {
    setSelected(id);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      {mode === 'review' && (
        <div className="flex flex-row items-center">
          <div className="bg-success w-4 h-4 rounded-full mr-2" />
          <Text weight="semibold" size="sm" className="text-body">
            Review Mode
          </Text>
        </div>
      )}
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
      <Text size="lg" className="text-black text-center mt-12 mb-2">
        Vote for one please
      </Text>
      {rivals.map(item => (
        <Card
          votes={item.votes}
          title={item.title}
          key={item.id || item.key}
          onClick={() => {
            if (item.id) {
              handleClick(item.id);
            } else if (item.key) handleClick(item.key);
          }}
          selected={item.id === selected || item.key === selected}
        />
      ))}
    </div>
  );
};

export default PublishTemplate;
