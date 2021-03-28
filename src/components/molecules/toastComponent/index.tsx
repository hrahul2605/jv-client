import React from 'react';
import toast from 'react-hot-toast';
import { Button, Icon } from '../../atoms';

interface ToastComponentProps {
  handleSuccessClick: () => void;
  text: string | React.ReactNode;
  id: string;
}

const ToastComponent: React.FC<ToastComponentProps> = (
  props,
): React.ReactElement => {
  const { handleSuccessClick, text, id } = props;
  return (
    <span className="flex flex-row items-center">
      {text}
      <div className="flex flex-row ml-2">
        <Button
          theme="text"
          size="s-icon"
          icon={<Icon type="plus" className="text-white" width={16} />}
          onClick={handleSuccessClick}
          className="bg-success border-background"
        />
        <Button
          theme="text"
          size="s-icon"
          icon={<Icon type="close" className="text-white" width={16} />}
          onClick={() => {
            toast.dismiss(id);
          }}
          className="ml-1 bg-error border-background"
        />
      </div>
    </span>
  );
};

export default ToastComponent;
