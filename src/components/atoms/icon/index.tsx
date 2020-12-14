import React from 'react';
import { tuple } from '../../utils';

// Assets
import { ReactComponent as ForwardIcon } from './assets/forward.svg';

// Icon Types
const IconTypes = tuple('forward');
export type IconType = typeof IconTypes[number];

interface Props extends React.SVGProps<SVGSVGElement> {
  type: IconType;
  className?: string;
}

const Icon: React.FC<Props> = (props): JSX.Element => {
  const { type, className, ...rest } = props;
  switch (type) {
    case 'forward':
      return <ForwardIcon {...rest} className={className} />;

    default:
      return <></>;
  }
};

export default Icon;
