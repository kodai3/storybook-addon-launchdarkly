import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import * as stories from './Example.stories';

const { True, False } = composeStories(stories);

describe('Example', () => {
  test('flag shoud be True', async () => {
    await True.run();

    expect(screen.queryByText('True')).not.toBeNull();
    expect(screen.queryByText('False')).toBeNull();
  });

  test('flag shoud be False', async () => {
    await False.run();

    expect(screen.queryByText('True')).toBeNull();
    expect(screen.queryByText('False')).not.toBeNull();
  });
});
