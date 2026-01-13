import { useAppSelector } from '@/src/hooks/store/';
import { selectPreferencesWeekStartsOn } from '@/src/store/settings/preferences/';

// Hook for getting the day the week starts on
export const usePreferencesWeekStartsOn = () => {
    // Get the day week starts on from the preferences state
    const weekStartsOn = useAppSelector(state => selectPreferencesWeekStartsOn(state));

    return weekStartsOn;
};