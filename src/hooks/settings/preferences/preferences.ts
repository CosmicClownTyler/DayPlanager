import { useAppSelector } from '@/hooks/store/';
import {
    selectPreferencesShowExtraDays,
    selectPreferencesWeekStartsOn
} from '@/store/settings/preferences/';

// Hook for getting the day the week starts on
export const usePreferencesWeekStartsOn = () => {
    return useAppSelector(state => selectPreferencesWeekStartsOn(state));
};
// Hook for getting whether or not to show extra days
export const usePreferencesShowExtraDays = () => {
    return useAppSelector(state => selectPreferencesShowExtraDays(state));
};