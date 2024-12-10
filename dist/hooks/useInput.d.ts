import { ChangeEvent } from 'react';
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
declare const useInput: (initialValue: string) => {
    value: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
export default useInput;
