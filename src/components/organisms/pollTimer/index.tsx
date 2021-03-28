import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Text } from '../../atoms';
import { getFormmattedDigit } from '../../../utils';
import { StatusText } from '../../molecules';
import useTimeInterval from '../../../hooks/useTimeInterval';

interface PollTimerProps {
  startTime: string;
  endTime: string;
}

const PollTimer: React.FC<PollTimerProps> = (props): React.ReactElement => {
  let curDayjsInstance = dayjs(new Date());
  const { endTime, startTime } = props;
  const [state, setState] = useState(-1);

  useEffect(() => {
    if (curDayjsInstance.isBefore(startTime)) {
      setState(0);
    } else if (
      curDayjsInstance.isAfter(startTime) &&
      curDayjsInstance.isBefore(endTime)
    ) {
      setState(1);
    } else setState(2);
  }, []);

  const [
    beforeStartFinished,
    beforeStartClock,
    setBeforeStart,
  ] = useTimeInterval(curDayjsInstance, startTime);

  const [afterStartFinished, afterStartClock, setAfterStart] = useTimeInterval(
    curDayjsInstance,
    endTime,
  );

  useEffect(() => {
    if (beforeStartFinished) setState(1);
    if (afterStartFinished) setState(2);
  }, [beforeStartFinished, afterStartFinished]);

  useEffect(() => {
    if (state === 0) {
      curDayjsInstance = dayjs(new Date());
      setBeforeStart({
        fromDayjsInstance: curDayjsInstance,
        endTime: startTime,
      });
    }

    if (state === 1) {
      curDayjsInstance = dayjs(new Date());
      setAfterStart({
        fromDayjsInstance: curDayjsInstance,
        endTime,
      });
    }
  }, [state]);
  return (
    <div className="text-center">
      {state === 0 && (
        <>
          <StatusText text="Voting will start in" status="warning" />
          <Text size="lg" weight="semibold" className="text-placeholder">
            {getFormmattedDigit(beforeStartClock.hours)}:
            {getFormmattedDigit(beforeStartClock.minutes)}:
            {getFormmattedDigit(beforeStartClock.seconds)}
          </Text>
        </>
      )}
      {state === 1 && (
        <>
          <StatusText text="Voting live" status="success" />
          <Text size="lg" weight="semibold" className="text-placeholder">
            {getFormmattedDigit(afterStartClock.hours)}:
            {getFormmattedDigit(afterStartClock.minutes)}:
            {getFormmattedDigit(afterStartClock.seconds)}
          </Text>
        </>
      )}
      {state === 2 && (
        <StatusText text="Voting period is over" status="error" />
      )}
    </div>
  );
};

export default PollTimer;
