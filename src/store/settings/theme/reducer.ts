import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ColorHex } from '@/features/ColorPicker/';

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
        setAutomaticColorScheme: (state) => {
            state.colorScheme = 'system';
        },
        setDarkColorScheme: (state) => {
            state.colorScheme = 'dark';
        },
        setLightColorScheme: (state) => {
            state.colorScheme = 'light';
        },
        setAutomaticAccentColor: (state) => {
            state.accentType = 'default';
        },
        setCustomAccentColor: (state) => {
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
    setAutomaticColorScheme,
    setDarkColorScheme,
    setLightColorScheme,
    setAutomaticAccentColor,
    setCustomAccentColor,
    setThemeAccentColor,
} = themeSlice.actions;