/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classnames from 'classnames';
import { tuple } from '../../../utils';
import './styles.css';

// Sizes
const Sizes = tuple('lg', 'sm');
type SizeType = typeof Sizes[number];

interface Props {
  name?: string;
  size?: SizeType;
  label: string;
  caption?: string;
  className?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  ref?:
    | React.RefObject<HTMLInputElement>
    // eslint-disable-next-line no-unused-vars
    | ((instance: HTMLInputElement | null) => void)
    | null;
}

const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  (props, ref): React.ReactElement => {
    const {
      label,
      size,
      caption,
      className,
      autoFocus,
      name,
      defaultValue,
    } = props;
    const classProps = classnames({ [`input-${size}`]: true }, 'input-base');
    const standardContainerClass = classnames(className, 'input-container');

    return (
      <>
        <div className={standardContainerClass}>
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            name={name}
            ref={ref}
            required
            className={classProps}
            autoComplete="off"
            defaultValue={defaultValue}
          />
          <label className="input-text">{label}</label>
        </div>
        {caption && <span className="input-caption">{caption}</span>}
      </>
    );
  },
);

Input.defaultProps = {
  size: 'sm',
};

export default Input;
