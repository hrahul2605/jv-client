/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classnames from 'classnames';
import './styles.css';

interface Props {
  name?: string;
  label: string;
  caption?: string;
  className?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  ref?:
    | React.RefObject<HTMLTextAreaElement>
    // eslint-disable-next-line no-unused-vars
    | ((instance: HTMLTextAreaElement | null) => void)
    | null;
}

const TextArea: React.FC<Props> = React.forwardRef<HTMLTextAreaElement, Props>(
  (props, ref): React.ReactElement => {
    const { label, caption, className, autoFocus, name, defaultValue } = props;
    const areaContainerClass = classnames(
      className,
      'input-textarea-container',
    );

    return (
      <>
        <div className={areaContainerClass}>
          <textarea
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            ref={ref}
            maxLength={60}
            required
            className="input-textarea"
            name={name}
            defaultValue={defaultValue}
          />
          <label className="input-textarea-label">{label}</label>
        </div>
        {caption && <span className="input-caption">{caption}</span>}
      </>
    );
  },
);

export default TextArea;
