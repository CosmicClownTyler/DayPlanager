/**
 * Interface for a color theme, defining the scheme (dark or light) and all necessary colors.
 */
export interface ColorTheme {
    /** The boolean value determining if this color theme is dark or light themed. */
    isDark: boolean;
    /** The color used for the background and empty spaces. Determined by theme color scheme. */
    background: ColorHex;
    /** The color used for the main text and other key elements. Determined by theme color scheme. */
    primary: ColorHex;
    /** The color used for smaller text and other side elements. Determined by theme color scheme. */
    secondary: ColorHex;
    /** The color used for filling sub elements. Determined by theme color scheme. */
    foreground: ColorHex;
    /** The color used for borders and outlines. Determined by theme color scheme. */
    borders: ColorHex;
    /** The color used for accents and specific visual focal points. Determined by theme accent type. */
    accent: ColorHex;
};

export type ColorHex = `#${string}`;