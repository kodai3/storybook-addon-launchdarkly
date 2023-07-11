import { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';
import { Example } from './Example';

const meta: Meta<ComponentType<typeof Example>> = {
  component: Example,
}
export default meta

export const True: StoryObj<typeof meta> = {
  parameters: {
    launchdarkly: {
      flags: {
        testFlag: true,
      },
    },
  },
};

export const False: StoryObj<typeof meta> = {
  parameters: {
    launchdarkly: {
      flags: {
        testFlag: false,
      },
    },
  },
};
