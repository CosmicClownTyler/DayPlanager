import { combineReducers } from '@reduxjs/toolkit';

import { preferencesReducer } from './preferences/reducer';
import { themeReducer } from './theme/reducer';

export const settingsReducer = combineReducers({
    theme: themeReducer,
    preferences: preferencesReducer,
});