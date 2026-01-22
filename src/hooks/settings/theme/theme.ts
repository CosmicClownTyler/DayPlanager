import { useColorScheme } from 'react-native';

import { useAppSelector } from '@/hooks/store/';
import { selectThemeAccentType, selectThemeColorScheme, selectThemeCustomAccentColor } from '@/store/settings/theme/';
import type { ColorTheme } from '@/theme/colors/';
import { DarkColorTheme, LightColorTheme } from '@/theme/colors/';

// Hook for getting the theme's color scheme ('system' or 'light' or 'dark')
export const useThemeColorScheme = () => {
    return useAppSelector(state => selectThemeColorScheme(state));
};
// Hook for getting the theme's actual color scheme ('light' or 'dark')
export const useThemeActualColorScheme = () => {
    // Get the color scheme from the theme state
    const colorScheme = useAppSelector(state => selectThemeColorScheme(state));

    // Get the system color scheme from react native's hook
    const systemColorScheme = useColorScheme();

    // If the theme's color scheme is set to system, return the system color scheme
    if (colorScheme == 'system') {
        if (systemColorScheme == 'light') {
            return 'light';
        }
        else {
            return 'dark';
        }
    }
    // Otherwise return the theme's color scheme, either 'dark' or 'light'
    else {
        return colorScheme;
    }
};
// Hook for getting the theme's accent type ('default' or 'custom')
export const useThemeAccentType = () => {
    return useAppSelector(state => selectThemeAccentType(state));
}
// Hook for getting the theme's custom accent color
export const useThemeCustomAccentColor = () => {
    return useAppSelector(state => selectThemeCustomAccentColor(state));
}
// Hook for getting the theme's colors
export const useThemeColors = () => {
    // Get the accent type, custom accent color, and color scheme
    const accentType = useThemeAccentType();
    const customAccentColor = useThemeCustomAccentColor();
    const colorScheme = useThemeActualColorScheme();

    // Set the colors based on the color scheme
    let colors = colorScheme == 'dark' ? { ...DarkColorTheme } : { ...LightColorTheme };

    // Set the accent color if the accent type is custom
    if (accentType == 'custom') {
        colors.accent = customAccentColor;
    }

    return colors as ColorTheme;
};