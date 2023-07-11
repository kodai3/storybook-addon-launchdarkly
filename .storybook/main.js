module.exports = {
  stories: ['../stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['../dist/preset'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
};