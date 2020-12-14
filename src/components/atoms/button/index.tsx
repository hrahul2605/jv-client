/* eslint-disable no-unused-vars */
import React from 'react';
import classnames from 'classnames';
import { tuple } from '../../utils';
import './styles.css';

// Types of Buttons
const ButtonTypes = tuple('button', 'reset', 'submit');
export type ButtonType = typeof ButtonTypes[number];

// Sizes for Buttons
const ButtonSizes = tuple('sm', 'md', 'lg', 'icon');
export type ButtonSizeTypes = typeof ButtonSizes[number];

// Themes for Buttons
const ButtonThemes = tuple('primary', 'secondary', 'subtle', 'text');
export type ButtonThemeTypes = typeof ButtonThemes[number];

// Button Props
export interface Props {
  type?: ButtonType;
  size?: ButtonSizeTypes;
  theme?: ButtonThemeTypes;
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

  const classProps = classnames('btn-base', className, {
    [`btn-${theme}`]: true,
    [`btn-${size}`]: true,
    'stroke-current': size === 'icon',
    'icon-secondary': size === 'icon' && theme !== 'primary',
    'icon-primary': size === 'icon' && theme === 'primary',
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={classProps}
      disabled={disabled}
    >
      {size === 'icon' ? icon : children}
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
