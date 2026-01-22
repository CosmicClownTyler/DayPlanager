import type { ScrollViewProps } from 'react-native';
import { ScrollView as BaseScrollView } from 'react-native';

import { useThemeColors } from '@/hooks/settings/theme/';

export function ScrollView(props: ScrollViewProps) {
    // Deconstruct props
    const { indicatorStyle, style, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseScrollView
            indicatorStyle={indicatorStyle || themeColors.isDark ? 'white' : 'black'}
            style={[style, {
                width: '100%'
            }]}
            {...rest}
        >

        </BaseScrollView>
    );
};