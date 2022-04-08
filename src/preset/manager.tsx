import { addons, types } from '@storybook/addons';
import { ADDON_ID, PARAM_KEY } from '../constants';
import { Panel } from '../panel';
import { getTitle } from '../title';

addons.register(ADDON_ID, () => {
  // Register the panel
  addons.add(ADDON_ID, {
    paramKey: PARAM_KEY,
    render: Panel,
    title: getTitle,
    type: types.PANEL,
  });
});
