import type { ProjectAnnotations, Renderer } from '@storybook/types';
import { withLaunchDarkly } from './decorators';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withLaunchDarkly],
};

export default preview;
