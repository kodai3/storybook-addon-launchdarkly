import { ComponentMeta, StoryObj } from '@storybook/react';
import { Example } from './Example';

export default {
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

export const True: StoryObj = {
  parameters: {
    launchdarkly: {
      flags: {
        testFlag: true,
      },
    },
  },
};

export const False: StoryObj = {
  parameters: {
    launchdarkly: {
      flags: {
        testFlag: false,
      },
    },
  },
};
