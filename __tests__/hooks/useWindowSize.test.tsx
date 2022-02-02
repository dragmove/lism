import useWindowSize from '@hooks/useWindowSize';
import { renderHook } from '@testing-library/react-hooks';

describe('useWindowSize', () => {
  it('should return width, number', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(typeof result.current.width).toEqual('number');
    expect(typeof result.current.height).toEqual('number');
  });
});
