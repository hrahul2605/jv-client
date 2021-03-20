/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef } from 'react';
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
  className?: string;
  autoFocus?: boolean;
}

const Input: React.FC<Props> = (props): React.ReactElement => {
  const { label, size, type, caption, className, autoFocus } = props;
  const classProps = classnames({ [`input-${size}`]: true }, 'input-base');
  const standardContainerClass = classnames(className, 'input-container');
  const areaContainerClass = classnames(className, 'input-textarea-container');

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus) {
      if (type === 'standard') inputRef.current?.focus();
      else textAreaRef.current?.focus();
    }
  }, []);

  switch (type) {
    case 'standard':
      return (
        <>
          <div className={standardContainerClass}>
            <input ref={inputRef} required className={classProps} />
            <label className="input-text">{label}</label>
          </div>
          {caption && <span className="input-caption">{caption}</span>}
        </>
      );
    case 'area':
      return (
        <>
          <div className={areaContainerClass}>
            <textarea
              ref={textAreaRef}
              maxLength={60}
              required
              className="input-textarea"
            />
            <label className="input-textarea-label">{label}</label>
          </div>
          {caption && <span className="input-caption">{caption}</span>}
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
