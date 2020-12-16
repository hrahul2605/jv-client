/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classnames from 'classnames';
import { tuple } from '../../utils';
import './styles.css';

// Input Types
const InputTypes = tuple('standard', 'area');
type InputType = typeof InputTypes[number];

// Sizes
const Sizes = tuple('lg', 'sm');
type SizeType = typeof Sizes[number];

interface Props {
  type?: InputType;
  size?: SizeType;
  label: string;
  caption?: string;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  const { label, size, type, caption } = props;
  const classProps = classnames({ [`input-${size}`]: true }, 'input-base');
  switch (type) {
    case 'standard':
      return (
        <>
          <div className="input-container">
            <input required className={classProps} />
            <label className="input-text">{label}</label>
          </div>
          {caption ? <span className="input-caption">{caption}</span> : null}
        </>
      );
    case 'area':
      return (
        <>
          <div className="input-textarea-container">
            <textarea maxLength={60} required className="input-textarea" />
            <label className="input-textarea-label">{label}</label>
          </div>
          {caption ? <span className="input-caption">{caption}</span> : null}
        </>
      );
    default:
      return <></>;
  }
};

Input.defaultProps = {
  type: 'standard',
  size: 'sm',
};

export default Input;
