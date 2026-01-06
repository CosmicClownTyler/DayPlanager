import { useDispatch, useSelector, useStore } from 'react-redux';

import type { AppState, AppStore, AppDispatch } from '@/src/store/';

// Typed store, selector, and dispatch
export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();