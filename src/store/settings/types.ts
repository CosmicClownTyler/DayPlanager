import { PreferencesState } from './preferences/types';
import { ThemeState } from './theme/types';

/**
 * The shape of the settings state
 */
export interface SettingsState {
    /** The theme state */
    theme: ThemeState;
    /** The preferences state */
    preferences: PreferencesState;
};