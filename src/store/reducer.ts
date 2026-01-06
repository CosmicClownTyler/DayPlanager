import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { settingsReducer } from './settings/reducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});