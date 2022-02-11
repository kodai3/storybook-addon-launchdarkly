if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

export const withLaunchDarkly = () => (): JSX.Element => {
  throw new Error(
    'Please look at the new configuration for storybook-addon-launchdarkly'
  );
};
