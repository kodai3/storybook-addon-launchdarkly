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
