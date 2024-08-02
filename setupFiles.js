import { setProjectAnnotations } from '@storybook/react';
import globalStorybookConfig from './.storybook/preview';
import { decorators } from './dist';

setProjectAnnotations({
  ...globalStorybookConfig,
  decorators: [...decorators],
});
