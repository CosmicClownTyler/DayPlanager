import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { settingsReducer } from './settings';

const rootReducer = combineReducers({
    settings: settingsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the type of the dispatch from the store itself
export type AppDispatch = typeof store.dispatch;