import { combineReducers } from '@reduxjs/toolkit';

import { themeReducer } from './theme';

export const settingsReducer = combineReducers({
    theme: themeReducer,
});