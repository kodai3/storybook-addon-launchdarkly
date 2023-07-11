import type { StoryContext } from '@storybook/types';
import {
  Provider,
  type ReactSdkContext,
} from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

const emptyState: ReactSdkContext = {
  flags: {},
  flagKeyMap: {},
};

export const withLaunchDarkly = (Story: FC<unknown>, context: StoryContext) => {
  const params = context.parameters[PARAM_KEY];

  return (
    <Provider value={params || emptyState}>
      <Story />
    </Provider>
  );
};
