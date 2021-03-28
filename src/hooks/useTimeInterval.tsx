import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { getHours, getMinutes, getSeconds } from '../utils';

type ReturnType = [
  boolean,
  {
    hours: number;
    minutes: number;
    seconds: number;
  },
  React.Dispatch<
    React.SetStateAction<{
      fromDayjsInstance: Dayjs;
      endTime: string;
    }>
  >,
];
const useTimeInterval = (
  fromDayjsInstance: Dayjs,
  endTime: string,
): ReturnType => {
  const [state, setState] = useState({ fromDayjsInstance, endTime });
  const [finished, setFinished] = useState(false);
  const [hours, setHours] = useState(
    getHours(state.fromDayjsInstance, state.endTime),
  );
  const [minutes, setMinutes] = useState(
    getMinutes(state.fromDayjsInstance, state.endTime),
  );
  const [seconds, setSeconds] = useState(
    getSeconds(state.fromDayjsInstance, state.endTime),
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds(s => {
        let hourBool = false;
        let minuteBool = false;
        if (s === 0) {
          setMinutes(m => {
            if (m === 0) {
              minuteBool = true;
              setHours(h => {
                if (h === 0) {
                  hourBool = true;
                  setFinished(true);
                  clearInterval(intervalID);
                  return 0;
                }
                return h - 1;
              });
              if (hourBool) return 0;
              return 59;
            }
            return m - 1;
          });
          if (hourBool && minuteBool) return 0;
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalID);
  }, [state]);

  const clock = {
    hours,
    minutes,
    seconds,
  };
  return [finished, clock, setState];
};

export default useTimeInterval;
