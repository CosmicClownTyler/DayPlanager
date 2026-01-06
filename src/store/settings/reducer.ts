import { combineReducers } from '@reduxjs/toolkit';

import { themeReducer } from './theme/reducer';

export const settingsReducer = combineReducers({
    theme: themeReducer,
});