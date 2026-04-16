import React from 'react';
import { AddonPanel } from 'storybook/internal/components';
import { addons, types } from 'storybook/manager-api';
import { ADDON_ID, PARAM_KEY } from './constants.js';
import { Panel } from './panel.js';
import { getTitle } from './title.js';

addons.register(ADDON_ID, (api) => {
  addons.add(ADDON_ID, {
    paramKey: PARAM_KEY,
    render({ active = false }) {
      return (
        <AddonPanel active={active}>
          <>{active && api.getCurrentStoryData() ? <Panel /> : null}</>
        </AddonPanel>
      );
    },
    title: getTitle,
    type: types.PANEL,
  });
});
