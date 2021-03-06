/* eslint-env jest */

import React, { FC } from 'react';
import { render, cleanup } from '@testing-library/react';

import { ENTERING, AnimatorFlow } from '../constants';
import { AnimatorContext } from '../AnimatorContext';
import { useAnimator } from './useAnimator';

afterEach(cleanup);

test('Should return undefined if no provider was found', () => {
  let animator: any;
  const Example: FC = () => {
    animator = useAnimator();
    return null;
  };
  render(<Example />);
  expect(animator).toBeUndefined();
});

test('Should return provided data if provider was found', () => {
  const flow: AnimatorFlow = {
    value: ENTERING
  };
  const animatorSettings = {
    duration: {
      enter: 0,
      exit: 0,
      stagger: 0,
      delay: 0,
      offset: 0
    },
    animate: true,
    root: true,
    merge: false,
    flow,
    setupAnimateRefs: () => { },
    updateDuration: () => { },
    _id: 0,
    _subscribe: () => { },
    _unsubscribe: () => { }
  };
  let animator;
  const Example: FC = () => {
    animator = useAnimator();
    return null;
  };
  render(
    <AnimatorContext.Provider value={animatorSettings}>
      <Example />
    </AnimatorContext.Provider>
  );
  expect(animator).toBe(animatorSettings);
});
