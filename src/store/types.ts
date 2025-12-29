import type { ColorHex } from '@/src/theme/colors';

/**
 * The shape of the app state.
 */
export interface AppState {
    settings: SettingsState;
};
/**
 * The shape of the settings state.
 */
export interface SettingsState {
    /** The theme state. */
    theme: ThemeState;
};

/**
 * The shape of the theme state.
 */
export interface ThemeState {
    /** The color scheme for the current theme. */
    colorScheme: 'dark' | 'light' | 'system';
    /** The accent type for the current theme. */
    accentType: 'default' | 'custom';
    /** The custom accent color to use if the accent type is set to custom. */
    customAccentColor: ColorHex;
};