import '@testing-library/jest-dom/vitest'
import { setProjectAnnotations } from '@storybook/react';
import globalStorybookConfig from './.storybook/preview';
import preview from './dist/preview';

setProjectAnnotations({
  ...globalStorybookConfig,
  decorators: [...preview.decorators],
});
