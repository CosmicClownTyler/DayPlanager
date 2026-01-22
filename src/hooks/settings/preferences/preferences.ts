import { useAppSelector } from '@/hooks/store/';
import { selectPreferencesWeekStartsOn } from '@/store/settings/preferences/';

// Hook for getting the day the week starts on
export const usePreferencesWeekStartsOn = () => {
    return useAppSelector(state => selectPreferencesWeekStartsOn(state));
};