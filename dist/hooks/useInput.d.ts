import { ChangeEvent } from 'react';
declare const useInput: (initialValue: string) => {
    value: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
export default useInput;
