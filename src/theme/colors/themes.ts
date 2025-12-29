import type { ColorTheme } from './types';

export const DarkColorTheme: ColorTheme = {
    isDark: true,
    background: '#000000',
    primary: '#ffffff',
    secondary: '#999999',
    foreground: '#111111',
    borders: '#333333',
    accent: '#00aaff',
};
export const LightColorTheme: ColorTheme = {
    isDark: false,
    background: '#ffffff',
    primary: '#000000',
    secondary: '#666666',
    foreground: '#eeeeee',
    borders: '#cccccc',
    accent: '#0055ff',
};