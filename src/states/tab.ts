import { proxy } from 'valtio';

// valtio causes renderloop in here so used changeNotifier so investigate and use valtio

export const tabState = proxy({
  currentTab: 0,
  data: null
});

export const tabActions = {
  setTab: (tabId: number, data: any = null) => {
    tabState.currentTab = tabId;
    tabState.data = data;
  }
};
