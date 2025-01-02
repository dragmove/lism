import '@testing-library/jest-dom';

import useInput from '@hooks/useInput';
import { renderHook } from '@testing-library/react';
import { act, ChangeEvent } from 'react';

describe('useInput', () => {
  it('should return value and onChange', () => {
    const { result } = renderHook(() => useInput('initial'));

    expect(result.current.value).toBe('initial');
    expect(typeof result.current.onChange).toBe('function');
  });

  it('should update value when onChange is called', () => {
    const { result } = renderHook(() => useInput('initial'));

    act(() => {
      result.current.onChange({
        target: { value: 'new' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('new');
  });
});
