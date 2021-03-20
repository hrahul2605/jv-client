import React, { useState } from 'react';
import { Card, Text } from '../../atoms';

interface RivalType {
  name: string;
  id: string;
}

interface Props {
  title: string;
  description: string;
  rivals: RivalType[];
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
        className="text-active mt-16"
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
          title={item.name}
          key={item.id}
          onClick={() => handleClick(item.id)}
          selected={item.id === selected}
        />
      ))}
    </div>
  );
};

export default PublishTemplate;
