import { ChangeEvent, useCallback, useState } from 'react';

/**
 * A custom React hook for managing the state of an input element.
 *
 * @param {string} initialValue - The initial value of the input element.
 * @returns {object} An object containing:
 * - `value`: The current value of the input element.
 * - `onChange`: A callback function to update the value when the input changes.
 *
 * @example
 * const { value, onChange } = useInput('initial');
 * <input value={value} onChange={onChange} />
 */
const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;
