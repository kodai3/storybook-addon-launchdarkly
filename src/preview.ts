import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';
import { withLaunchDarkly } from './decorators.js';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withLaunchDarkly],
};

export default preview;
