import { useParameter } from '@storybook/api';
import { ResetWrapper, TableWrapper } from '@storybook/components';
import { LDContext } from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

export const Panel: FC = () => {
  const { flags } = useParameter<LDContext>(PARAM_KEY);
  return (
    <ResetWrapper>
      <TableWrapper className="docblock-argstable">
        <thead className="docblock-argstable-head">
          <tr key="head">
            <th key="name">
              <span>Name</span>
            </th>
            <th key="value">
              <span>Value</span>
            </th>
          </tr>
        </thead>
        <tbody className="docblock-argstable-body">
          {Object.keys(flags).map((key) => (
            <tr key={`key-${key}`}>
              <th>
                <span>{key}</span>
              </th>
              <th>
                <span>{`${JSON.stringify(flags[key])}`}</span>
              </th>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </ResetWrapper>
  );
};
