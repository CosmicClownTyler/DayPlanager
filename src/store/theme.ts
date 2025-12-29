import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ColorHex } from '@/src/theme/colors';

import type { AppState, ThemeState } from './types';

export const defaultThemeState: ThemeState = {
    colorScheme: 'system',
    accentType: 'default',
    customAccentColor: '#800000',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: defaultThemeState,
    reducers: {
        revertToDefaultTheme: () => {
            return defaultThemeState;
        },
        automaticColorScheme: (state) => {
            state.colorScheme = 'system';
        },
        darkColorScheme: (state) => {
            state.colorScheme = 'dark';
        },
        lightColorScheme: (state) => {
            state.colorScheme = 'light';
        },
        automaticAccentColor: (state) => {
            state.accentType = 'default';
        },
        customAccentColor: (state) => {
            state.accentType = 'custom';
        },
        setThemeAccentColor: (state, action: PayloadAction<ColorHex>) => {
            state.customAccentColor = action.payload;
        },
    },
});

export const themeReducer = themeSlice.reducer;

export const {
    revertToDefaultTheme,
    automaticColorScheme,
    darkColorScheme,
    lightColorScheme,
    automaticAccentColor,
    customAccentColor,
    setThemeAccentColor,
} = themeSlice.actions;

export const selectTheme = (state: AppState) => state.settings.theme;
export const selectThemeColorScheme = (state: AppState) => state.settings.theme.colorScheme;
export const selectThemeAccentType = (state: AppState) => state.settings.theme.accentType;
export const selectThemeCustomAccentColor = (state: AppState) => state.settings.theme.customAccentColor;