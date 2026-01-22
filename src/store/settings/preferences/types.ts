import type { Weekday } from '@/features/Calendar';

/**
 * The shape of the preferences state
 */
export interface PreferencesState {
    /** The day that the week starts on */
    weekStartsOn: Weekday;
    /** Whether to show extra days in the calendar view or not */
    showExtraDays: boolean;
};