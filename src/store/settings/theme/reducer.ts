import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ColorHex } from '@/src/theme/colors/';

import type { ThemeState } from './types';

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