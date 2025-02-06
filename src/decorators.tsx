import React, { type ReactNode } from 'react';
import type { DecoratorFunction, Renderer } from '@storybook/types';
import {
  Provider,
  type ReactSdkContext,
} from 'launchdarkly-react-client-sdk/lib/context';
import { PARAM_KEY } from './constants';

const emptyState: ReactSdkContext = {
  flags: {},
  flagKeyMap: {},
};

export const withLaunchDarkly: DecoratorFunction<Renderer> = (
  Story,
  context
) => {
  const params = context.parameters[PARAM_KEY];

  return (
    <Provider value={params || emptyState}>{Story() as ReactNode}</Provider>
  );
};
