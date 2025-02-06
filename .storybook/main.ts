import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['./localPreset.js', '@storybook/addon-webpack5-compiler-swc'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;
