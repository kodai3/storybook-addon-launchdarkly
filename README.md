# Storybook Addon LaunchDarkly

[![current version](https://img.shields.io/npm/v/storybook-addon-launchdarkly.svg)](https://www.npmjs.com/package/storybook-addon-launchdarkly)

Use LaunchDarkly in your Storybook stories.

## Disclamer
This is not official storybook addon.
I made this because LD won't for years https://github.com/launchdarkly/react-client-sdk/issues/30.

I can't actively handle the issues which is not in my usecase. (and won't because LD should do officially.)

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

## Writing your stories with flags

```jsx
import Example from '.';

const meta: Meta<typeof Exapmle> default {
  component: Example,
};
export default meta;

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

## Writing your test with flagged stories

Because composeStory dosen't handdle addons, you need to setup.
check [this comment](https://github.com/storybookjs/testing-react/issues/86#issuecomment-1027919112) for referrence.

```js
// setupFile.js
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalConfig from '../.storybook/preview';
import { decorators } from 'storybook-addon-launchdarkly/dist';

setGlobalConfig({
  ...globalConfig,
  decorators: [
    ...globalConfig.decorators,
    // not loaded automatically in preset, must add this manually for @storybook/testing-react to pick it up
    ...decorators,
  ],
});
```

```tsx
// Example.test.tsx
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Example.stories';

describe('Example', () => {
  const { True, False } = composeStories(stories);

  test('flag shoud be True', async () => {
    render(<True {...True.args} />);

    expect(screen.queryByText('True')).not.toBeNull();
    expect(screen.queryByText('False')).toBeNull();
  });

  test('flag shoud be False', async () => {
    render(<False {...False.args} />);

    expect(screen.queryByText('True')).toBeNull();
    expect(screen.queryByText('False')).not.toBeNull();
  });
});
```

## Example StoryBook

https://kodai3.github.io/storybook-addon-launchdarkly
