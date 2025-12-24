import { Image } from 'react-native';

export interface TabBarIconProps {
    color: string;
    size: number;
};

export function HomeIcon({ color, size }: TabBarIconProps) {
    return (<Image
        tintColor={color}
        source={require('@/assets/icons/home.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
};

export function SettingsIcon({ color, size }: TabBarIconProps) {
    return (<Image
        tintColor={color}
        source={require('@/assets/icons/settings.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
};