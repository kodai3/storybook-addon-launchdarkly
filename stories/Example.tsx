import { useFlags } from 'launchdarkly-react-client-sdk';

export const Example = () => {
  const { testFlag } = useFlags();

  return testFlag ? (
    <div style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
  ) : (
    <div style={{ width: 300, height: 300, backgroundColor: 'red' }} />
  );
};
