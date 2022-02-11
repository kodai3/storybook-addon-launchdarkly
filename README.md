# Storybook Addon LaunchDarkly

Use LaunchDarkly in your Storybook stories.

## Install

**yarn**

```
yarn add --dev storybook-addon-launchdarkly
```

**npm**

```
npm install -D storybook-addon-launchdarkly
```

Add the addon to your configuration in `.storybook/main.js`

```js
module.exports = {
  ...config,
  addons: [
    ...your addons
    "storybook-addon-launchdarkly",
  ],
};
```

add the following to your `.storybook/preview.js`

```js
export const parameters = {
  launchdarkly: {
    flags: {
      yourFlag: true,
    },
  },
};
```

## Writing your stories with queries

```jsx
import Example from '.';

export default {
  component: Example,
} as ComponentMeta<typeof Example>;

export const Default: StoryObj = {
  parameters: {
    launchdarkly: {
      flags: {
        testFlag: true,
      },
    },
  },
};
```

## Example StoryBook
