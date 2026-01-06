import type { AppState } from '../../types';

export const selectTheme = (state: AppState) => state.settings.theme;
export const selectThemeColorScheme = (state: AppState) => state.settings.theme.colorScheme;
export const selectThemeAccentType = (state: AppState) => state.settings.theme.accentType;
export const selectThemeCustomAccentColor = (state: AppState) => state.settings.theme.customAccentColor;