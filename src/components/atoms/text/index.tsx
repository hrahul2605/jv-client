import React from 'react';
import classnames from 'classnames';
import { tuple } from '../../../utils';
import './styles.css';

// Text Type
const TextTypes = tuple('display', 'text');
type TextType = typeof TextTypes[number];

// Family Type
const FamilyTypes = tuple('sans', 'serif');
type FamilyType = typeof FamilyTypes[number];

// Size Type
const Sizes = tuple('lg', 'md', 'sm', 'xs');
type SizeType = typeof Sizes[number];

// Font Weights
const Weight = tuple(
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
);
type WeightType = typeof Weight[number];

// Component Props
interface Props {
  type?: TextType;
  family?: FamilyType;
  size?: SizeType;
  weight?: WeightType;
  className?: string;
}

const Text: React.FC<Props> = (props): JSX.Element => {
  const { weight, size, family, type, children, className } = props;
  const classProps = classnames(className, {
    [`font-${family}`]: true,
    [`font-${type}-${size}`]: true,
    [`font-${weight}`]: true,
    [`font-${type}-base`]: true,
  });
  return <p className={classProps}>{children}</p>;
};

Text.defaultProps = {
  type: 'text',
  family: 'sans',
  size: 'md',
  weight: 'normal',
};

export default Text;
