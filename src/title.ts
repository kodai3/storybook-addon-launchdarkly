import { useParameter } from 'storybook/manager-api';
import type { ReactSdkContext } from 'launchdarkly-react-client-sdk/lib/context.js';
import { PARAM_KEY } from './constants.js';

export function getTitle(): string {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParameter<ReactSdkContext>(PARAM_KEY);

  if (params?.flags) {
    return `Launchdarkly (${Object.keys(params.flags).length})`;
  }

  return 'Launchdarkly (0)';
}
