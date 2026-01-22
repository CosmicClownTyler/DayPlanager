import { Section as BaseSection } from 'react-native-tableview-simple';
import type { SectionInterface } from 'react-native-tableview-simple/lib/typescript/components/Section';

import { useThemeColors } from '@/hooks/settings/theme/';

export function Section(props: SectionInterface) {
    // Deconstruct props
    const { children, ...rest } = props;

    const themeColors = useThemeColors();

    return (
        <BaseSection
            headerTextColor={themeColors.secondary}
            footerTextColor={themeColors.secondary}
            separatorTintColor={themeColors.borders}
            {...rest}
        >
            {children}
        </BaseSection>
    );
};