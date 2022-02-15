import { useParameter } from '@storybook/api';
import {
  Link,
  Placeholder,
  ResetWrapper,
  TableWrapper,
} from '@storybook/components';
import { LDContext } from 'launchdarkly-react-client-sdk/lib/context';
import { FC } from 'react';
import { PARAM_KEY } from './constants';

export const Panel: FC = () => {
  const params = useParameter<LDContext>(PARAM_KEY);

  if (typeof params?.flags !== 'object')
    return (
      <Placeholder>
        No flags found
        <Link
          href="https://github.com/kodai3/storybook-addon-launchdarkly/blob/main/README.md"
          target="_blank"
          withArrow
        >
          Learn how to add flags to your story
        </Link>
      </Placeholder>
    );

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
          {Object.keys(params.flags).map((key) => (
            <tr key={`key-${key}`}>
              <th>
                <span>{key}</span>
              </th>
              <th>
                <span>{`${JSON.stringify(params.flags[key])}`}</span>
              </th>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </ResetWrapper>
  );
};
