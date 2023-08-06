import { StateNavigator } from 'navigation';

const homeNavigator = new StateNavigator([
  { key: 'home' },
  { key: 'viewAll', trackCrumbTrail: true }
]);

const searchNavigator = new StateNavigator([{ key: 'search', trackCrumbTrail: true }]);

const settingsNavigator = new StateNavigator([{ key: 'settings', trackCrumbTrail: true }]);

const tabNavigator = new StateNavigator([
  { key: 'tabs' },
  { key: 'player', trackCrumbTrail: true }
]);

export { homeNavigator, searchNavigator, settingsNavigator, tabNavigator };
