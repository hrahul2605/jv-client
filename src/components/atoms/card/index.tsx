/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import Text from '../text';
import './styles.css';
import Icon from '../icon';

interface Props {
  title: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Card: React.FC<Props> = (props): React.ReactElement => {
  const { title, selected, onClick, onKeyPress } = props;
  const containerClass = classnames('card-container', {
    'card-container-selected': selected,
  });
  const textClass = classnames(
    { 'text-active': !selected },
    { 'text-success': selected },
  );
  return (
    <div className="my-2">
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={onKeyPress}
        className={containerClass}
      >
        <Text size="sm" className={textClass}>
          {title}
        </Text>
        {selected && <Icon type="plus" width={16} className="text-success" />}
      </div>
      {selected && (
        <Text size="xs" className="text-label mt-1" weight="medium">
          Thank you for voting!
        </Text>
      )}
    </div>
  );
};

export default Card;
