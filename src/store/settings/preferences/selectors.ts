import type { AppState } from '../../types';

export const selectPreferences = (state: AppState) => state.settings.preferences;
export const selectPreferencesWeekStartsOn = (state: AppState) => state.settings.preferences.weekStartsOn;
export const selectPreferencesShowExtraDays = (state: AppState) => state.settings.preferences.showExtraDays;