import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Weekday } from '@/features/Calendar';

import type { PreferencesState } from './types';

export const defaultPreferencesState: PreferencesState = {
    weekStartsOn: 'sunday',
    showExtraDays: true,
};

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: defaultPreferencesState,
    reducers: {
        revertToDefaultPreferences: () => {
            return defaultPreferencesState;
        },
        setWeekStartsOn: (state, action: PayloadAction<Weekday>) => {
            state.weekStartsOn = action.payload;
        },
        setShowExtraDaysTrue: (state) => {
            state.showExtraDays = true;
        },
        setShowExtraDaysFalse: (state) => {
            state.showExtraDays = false;
        },
    },
});

export const preferencesReducer = preferencesSlice.reducer;

export const {
    revertToDefaultPreferences,
    setWeekStartsOn,
    setShowExtraDaysTrue,
    setShowExtraDaysFalse,
} = preferencesSlice.actions;