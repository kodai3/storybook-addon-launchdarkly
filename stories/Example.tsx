import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

const commonStyles = {
  color: 'white',
  width: 300,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Example = () => {
  const { testFlag } = useFlags();
  return testFlag ? (
    <div style={{ backgroundColor: 'blue', ...commonStyles }}>True</div>
  ) : (
    <div style={{ backgroundColor: 'red', ...commonStyles }}>False</div>
  );
};
