import React from 'react';
import { tuple } from '../../../utils';

// Assets
import { ReactComponent as ForwardIcon } from './assets/forward.svg';
import { ReactComponent as ConfigureIcon } from './assets/configure.svg';
import { ReactComponent as BackIcon } from './assets/back.svg';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as LoadingIcon } from './assets/loading.svg';
import { ReactComponent as MinusIcon } from './assets/minus.svg';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import { ReactComponent as GoogleIcon } from './assets/google.svg';
import { ReactComponent as LogoIcon } from './assets/logo.svg';

// Icon Types
const IconTypes = tuple(
  'forward',
  'configure',
  'back',
  'close',
  'loading',
  'minus',
  'plus',
  'google',
  'logo',
);
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
    case 'configure':
      return <ConfigureIcon {...rest} className={className} />;
    case 'back':
      return <BackIcon {...rest} className={className} />;
    case 'close':
      return <CloseIcon {...rest} className={className} />;
    case 'loading':
      return <LoadingIcon {...rest} className={className} />;
    case 'minus':
      return <MinusIcon {...rest} className={className} />;
    case 'plus':
      return <PlusIcon {...rest} className={className} />;
    case 'google':
      return <GoogleIcon {...rest} className={className} />;
    case 'logo':
      return <LogoIcon {...rest} className={className} />;
    default:
      return <></>;
  }
};

export default Icon;
