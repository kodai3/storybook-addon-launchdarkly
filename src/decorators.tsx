import { useParameter } from '@storybook/addons';
import { LDContext, Provider } from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

const emptyState: LDContext = {
  flags: {},
};

export const withLaunchDarkly = (Story: FC<unknown>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParameter<LDContext>(PARAM_KEY);

  return (
    <Provider value={params || emptyState}>
      <Story />
    </Provider>
  );
};
