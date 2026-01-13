import type { Weekday } from '@/src/features/Calendar';

/**
 * The shape of the preferences state
 */
export interface PreferencesState {
    /** The day that the week starts on */
    weekStartsOn: Weekday;
};