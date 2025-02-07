import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './Example';

const meta = {
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;

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
