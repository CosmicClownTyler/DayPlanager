import { Image } from '@/components/primitives/Image';

import { TabBarIconProps } from './types';

export function HomeIcon({ color, size }: TabBarIconProps) {
    return (
        <Image
            tintColor={color}
            source={require('@/assets/icons/home.png')}
            style={{
                width: size,
                height: size,
            }}
            accessibilityLabel='Home'
            accessibilityHint='Home'
        />
    );
};

export function SettingsIcon({ color, size }: TabBarIconProps) {
    return (
        <Image
            tintColor={color}
            source={require('@/assets/icons/settings.png')}
            style={{
                width: size,
                height: size,
            }}
            accessibilityLabel='Settings'
            accessibilityHint='Settings'
        />
    );
};