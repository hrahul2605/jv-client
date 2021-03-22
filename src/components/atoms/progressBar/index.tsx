import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Text from '../text';
import './styles.css';

const INTERVAL = 64;

interface ProgressBarProps {
  label: string;
  loading: boolean;
  onFinish?: () => void;
  showPercentage?: boolean;
  interval?: number;
  center?: boolean;
}

let intervalID: null | NodeJS.Timeout = null;
const ProgressBar: React.FC<ProgressBarProps> = (props): React.ReactElement => {
  const { onFinish, loading, label, showPercentage, interval, center } = props;
  const [width, setWidth] = useState(0);

  const className = classnames('items-center', 'flex', 'flex-row', 'mt-2', {
    'justify-center': center,
    'text-center': center,
  });

  useEffect(() => {
    intervalID = setInterval(
      () => setWidth(prev => (prev + 1 > 99 ? 99 : prev + 1)),
      interval || INTERVAL,
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      if (intervalID) clearInterval(intervalID);
      intervalID = setInterval(
        () => setWidth(prev => (prev + 1 > 100 ? 100 : prev + 1)),
        interval || INTERVAL,
      );
    }
  }, [loading]);

  useEffect(() => {
    if (width === 100) {
      if (intervalID) {
        clearInterval(intervalID);
      }
      if (onFinish) onFinish();
    }
  }, [width]);
  return (
    <div className="flex-col">
      <div className="progress-bar-container">
        <div
          className="progress-bar-loader"
          style={{
            transition: `width ${interval || INTERVAL}ms ease-in-out`,
            width: `${width}%`,
          }}
        />
      </div>
      <div className={className}>
        {showPercentage && (
          <Text className="text-label mr-2" size="md" weight="semibold">
            {width.toFixed(0)}%
          </Text>
        )}
        <Text className="text-label" size="sm" weight="semibold">
          {label}
        </Text>
      </div>
    </div>
  );
};

export default ProgressBar;
