import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import { decorators } from './dist';

// NOTE: https://github.com/storybookjs/testing-react/issues/86#issuecomment-1027919112
setGlobalConfig({
  ...globalStorybookConfig,
  decorators: [...decorators],
});
