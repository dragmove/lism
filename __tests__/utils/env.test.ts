import { isDefined } from '@utils/common';
import { getGlobal, type GlobalEnv } from '@utils/env';

jest.mock('@utils/common', () => ({
  isDefined: jest.fn(),
}));

describe('getGlobal()', () => {
  const mockIsDefined = isDefined as jest.MockedFunction<typeof isDefined>;

  beforeEach(() => {
    mockIsDefined.mockImplementation((value: unknown) => value !== undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return globalThis if it is defined', () => {
    const mockEnv: GlobalEnv = { globalThis: {} as typeof globalThis };

    expect(getGlobal(mockEnv)).toBe(mockEnv.globalThis);
    expect(mockIsDefined).toHaveBeenCalledWith(mockEnv.globalThis);
  });

  it('should return self if globalThis is not defined but self is', () => {
    const mockEnv: GlobalEnv = { self: {} as typeof globalThis };

    expect(getGlobal(mockEnv)).toBe(mockEnv.self);
    expect(mockIsDefined).toHaveBeenCalledWith(mockEnv.self);
  });

  it('should return window if globalThis and self are not defined but window is', () => {
    const mockEnv: GlobalEnv = { window: {} as typeof globalThis };

    expect(getGlobal(mockEnv)).toBe(mockEnv.window);
    expect(mockIsDefined).toHaveBeenCalledWith(mockEnv.window);
  });

  it('should return global if none of the others are defined but global is', () => {
    const mockEnv: GlobalEnv = { global: {} as typeof globalThis };

    expect(getGlobal(mockEnv)).toBe(mockEnv.global);
    expect(mockIsDefined).toHaveBeenCalledWith(mockEnv.global);
  });

  it('should throw an error if no global object is found', () => {
    const mockEnv: GlobalEnv = {};

    expect(() => getGlobal(mockEnv)).toThrow('[getGlobal] Unable to locate global object');
  });
});
