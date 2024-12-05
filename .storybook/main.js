module.exports = {
  stories: ['../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['../dist/preset', '@storybook/addon-webpack5-compiler-swc'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
};
