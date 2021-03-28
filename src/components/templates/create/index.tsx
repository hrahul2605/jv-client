import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Text } from '../../atoms';

interface Props {
  title: string;
  subtitle?: string;
}

const CreateTemplate: React.FC<Props> = (props): React.ReactElement => {
  const { title, subtitle, children } = props;
  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex flex-row items-center">
        <Button
          className="absolute -left-20"
          theme="text"
          size="icon"
          icon={<Icon type="back" />}
          onClick={onBack}
        />
        <Text
          size="lg"
          type="display"
          weight="bold"
          family="serif"
          className="text-center"
        >
          {title}
        </Text>
      </div>
      {subtitle && (
        <Text size="lg" className="mt-2 text-center">
          {subtitle}
        </Text>
      )}
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default CreateTemplate;
