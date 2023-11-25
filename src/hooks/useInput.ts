import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;
