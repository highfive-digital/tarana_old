/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useState } from 'react';
import ChangeNotifier, { notifierState } from '~helpers/notifier';
import { isValidFunction, isValidObject } from '~helpers/validators';

const notifier = ChangeNotifier;

const useListener = (
  eventName: string,
  initialValue: any,
  callback?: (data: any) => void,
  resetState: boolean = false
) => {
  const baseValue = notifierState[eventName] ? notifierState[eventName] : initialValue;
  const [state, setState] = useState<any>(baseValue);

  useEffect(() => {
    const removeEventListener = notifier.listen(
      eventName,
      (data: any) => {
        if (callback != null && isValidFunction(callback)) {
          callback(data);
        }
        if (isValidObject(data)) {
          setState({ ...state, ...data });
        } else {
          setState(data);
        }
      },
      state
    );
    return () => {
      removeEventListener('use_listener', resetState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { state, notify: notifier.notify };
};

export default useListener;
