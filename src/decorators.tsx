import { useParameter } from '@storybook/addons';
import { LDContext, Provider } from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

export const withLaunchDarkly = (Story: FC<unknown>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const value = useParameter<LDContext>(PARAM_KEY);

  if (!value) {
    console.warn('storybook-addon-launchdarkly: LDContext is missing.');
    return <Story />;
  }

  return (
    <Provider value={value}>
      <Story />
    </Provider>
  );
};
