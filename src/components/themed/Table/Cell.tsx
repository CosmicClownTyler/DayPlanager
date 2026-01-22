import { Cell as BaseCell } from 'react-native-tableview-simple';
import type { CellInterface } from 'react-native-tableview-simple/lib/typescript/components/Cell';

import { useThemeColors } from '@/hooks/settings/theme/';

export function Cell(props: CellInterface) {
    // Deconstruct props
    const { children, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseCell
            titleTextColor={themeColors.primary}
            subtitleColor={themeColors.secondary}
            backgroundColor={themeColors.foreground}
            highlightUnderlayColor={themeColors.primary}
            highlightActiveOpacity={0.8}
            accessoryColor={themeColors.accent}
            accessoryColorDisclosureIndicator={themeColors.secondary}
            {...rest}
        >
            {children}
        </BaseCell>
    );
};