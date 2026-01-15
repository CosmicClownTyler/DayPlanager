import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColors } from '@/hooks/settings/theme/';

import { pageStyles } from './styles';
import type { PageProps } from './types';

export function Page(props: PageProps) {
    // Deconstruct props
    const { children } = props;

    const themeColors = useThemeColors();

    return (
        <SafeAreaView style={[pageStyles.container, { backgroundColor: themeColors.background }]}>
            {children}
        </SafeAreaView>
    );
};