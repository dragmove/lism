import '@testing-library/jest-dom';

import DelayedFallback from '@components/DelayedFallback/DelayedFallback';
import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

describe('DelayedFallback', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  test('should render children when isReadyToRender prop is true', () => {
    render(
      <DelayedFallback isReadyToRender={true}>
        <div data-testid="children-comp">foo</div>
      </DelayedFallback>
    );

    expect(screen.queryByTestId('children-comp')).toBeInTheDocument();
  });

  test('should render a fallback after fallbackDelay when isReadyToRender prop is false', () => {
    jest.useFakeTimers();

    render(
      <DelayedFallback
        isReadyToRender={false}
        fallback={<div data-testid="fallback-comp">fallback content</div>}
        fallbackDelay={1000}
      >
        <div>foo</div>
      </DelayedFallback>
    );

    expect(screen.queryByTestId('fallback-comp')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(screen.queryByTestId('fallback-comp')).toBeInTheDocument();
  });
});
