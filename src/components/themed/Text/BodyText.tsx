import { Text as BaseText } from 'react-native';
import type { TextProps } from 'react-native';

import { useThemeColors } from '@/hooks/settings/theme/';

export function BodyText(props: TextProps) {
    // Deconstruct props
    const { children, style, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseText
            style={[{
                color: themeColors.primary,
                fontSize: 15,
                padding: 15,
                textAlign: 'left',
            }, style]}
            {...rest}
        >
            {children}
        </BaseText>
    );
};