import { useEffect, useState } from 'react';
import ChangeNotifier, { type ListenerCallback } from '~helpers/notifier';
import { isValidObject } from '~helpers/validators';
// import ChangeNotifier, { type ListenerCallback } from '~utils/'; // Import your ChangeNotifier class

function useChangeNotifier<T>(
  eventName: string,
  initialData?: T
): [T | undefined, (data: T) => void] {
  const [state, setState] = useState<T | undefined>(() => {
    const latestState = ChangeNotifier.getLatestState<T>(eventName);
    return isValidObject(latestState) ? latestState : initialData;
  });

  useEffect(() => {
    const callback: ListenerCallback<T> = (data) => {
      setState(data);
    };

    const unsubscribe = ChangeNotifier.listen<T>(eventName, callback, initialData as any);

    return () => {
      unsubscribe();
    };
  }, [eventName, initialData]);

  const updateState = (data: T) => {
    ChangeNotifier.notify(eventName, data);
  };

  return [state, updateState];
}

export default useChangeNotifier;
