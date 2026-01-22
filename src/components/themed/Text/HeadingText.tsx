import { Text as BaseText } from 'react-native';
import type { TextProps } from 'react-native';

import { useThemeColors } from '@/hooks/settings/theme/';

export function HeadingText(props: TextProps) {
    // Deconstruct props
    const { children, style, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseText
            style={[{
                color: themeColors.primary,
                fontSize: 18,
                padding: 20,
                textAlign: 'left',
                fontWeight: 'bold',
            }, style]}
            {...rest}
        >
            {children}
        </BaseText>
    );
};