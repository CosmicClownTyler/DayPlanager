import type { HeaderProps } from '@/components/primitives/Header/';
import { Header as BaseHeader } from '@/components/primitives/Header/';

import { useThemeColors } from '@/hooks/settings/theme/';

export function Header(props: HeaderProps) {
    // Deconstruct props
    const { titleStyle, imageColor, style, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseHeader
            titleStyle={[{ color: themeColors.primary }, titleStyle]}
            imageColor={imageColor || themeColors.primary}
            style={[{
                backgroundColor: themeColors.background,
                borderBottomColor: themeColors.borders,
            }, style]}
            {...rest}
        />
    );
};