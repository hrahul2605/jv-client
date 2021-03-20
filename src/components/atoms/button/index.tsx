import React from 'react';
import classnames from 'classnames';
import { tuple } from '../../utils';
import './styles.css';

// Types of Buttons
const ButtonTypes = tuple('button', 'reset', 'submit');
export type ButtonType = typeof ButtonTypes[number];

// Sizes for Buttons
const ButtonSizes = tuple('sm', 'md', 'lg', 'icon', 's-icon');
export type ButtonSizeTypes = typeof ButtonSizes[number];

// Themes for Buttons
const ButtonThemes = tuple('primary', 'secondary', 'subtle', 'text');
export type ButtonThemeTypes = typeof ButtonThemes[number];

// Button Props
export interface Props {
  type?: ButtonType;
  size?: ButtonSizeTypes;
  theme?: ButtonThemeTypes;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

// Component
const Button: React.FC<Props> = (props): JSX.Element => {
  const {
    children,
    disabled,
    onClick,
    size,
    type,
    className,
    theme,
    icon,
  } = props;

  const isIcon = size === 'icon' || size === 's-icon';
  if (isIcon && !icon) {
    // eslint-disable-next-line no-console
    console.error("Button requires icon when using size='icon'");
  }

  const classProps = classnames('btn-base', className, {
    [`btn-${theme}`]: true,
    [`btn-${size}`]: true,
    'stroke-current': isIcon,
    'icon-secondary': isIcon && theme !== 'primary',
    'icon-primary': isIcon && theme === 'primary',
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={classProps}
      disabled={disabled}
    >
      {isIcon ? icon : children}
    </button>
  );
};

// Components' defaultProps
Button.defaultProps = {
  disabled: false,
  size: 'lg',
  theme: 'primary',
  type: 'button',
};

export default Button;
