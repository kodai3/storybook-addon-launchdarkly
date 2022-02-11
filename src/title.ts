import { useParameter } from '@storybook/api';
import { LDContext } from 'launchdarkly-react-client-sdk/lib/context';
import { PARAM_KEY } from './constants';

export function getTitle(): string {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParameter<LDContext>(PARAM_KEY);

  if (params?.flags) {
    return `Launchdarkly (${Object.keys(params?.flags).length})`;
  }

  return 'Launchdarkly (0)';
}
