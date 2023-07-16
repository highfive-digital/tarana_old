import { StateNavigator } from 'navigation';

const mainNavigator = new StateNavigator([
  { key: 'tabs' },
  { key: 'home', trackCrumbTrail: true },
  { key: 'playerx', trackCrumbTrail: true },
  { key: 'search', trackCrumbTrail: true },
  { key: 'settings', trackCrumbTrail: true }
]);

const tabNavigator = new StateNavigator([
  { key: 'tabs' },
  { key: 'player', trackCrumbTrail: true }
]);

export { mainNavigator, tabNavigator };
