import { StoryContext } from '@storybook/addons';
import { LDContext, Provider } from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

const emptyState: LDContext = {
  flags: {},
};

export const withLaunchDarkly = (Story: FC<unknown>, context: StoryContext) => {
  const params = context.parameters[PARAM_KEY];

  return (
    <Provider value={params || emptyState}>
      <Story />
    </Provider>
  );
};
