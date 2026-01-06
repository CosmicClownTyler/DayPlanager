import { store } from './reducer';

import type { SettingsState } from './settings/types';

/**
 * The shape of the app state
 */
export interface AppState {
    settings: SettingsState;
};
/**
 * The type of the store variable
 */
export type AppStore = typeof store;
/**
 * The type of the store's dispatch
 */
export type AppDispatch = typeof store.dispatch;