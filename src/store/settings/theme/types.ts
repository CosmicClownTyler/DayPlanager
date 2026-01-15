import type { ColorHex } from '@/features/ColorPicker/';

/**
 * The shape of the theme state
 */
export interface ThemeState {
    /** The color scheme for the current theme */
    colorScheme: 'dark' | 'light' | 'system';
    /** The accent type for the current theme */
    accentType: 'default' | 'custom';
    /** The custom accent color to use if the accent type is set to custom */
    customAccentColor: ColorHex;
};