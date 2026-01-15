import type { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ColorHex } from '@/features/ColorPicker/';

type HeaderSide =
    | { type: 'text'; value: string; onPress?: () => void; }
    | { type: 'image'; value: ImageSourcePropType; onPress?: () => void; }
    | { type: 'component'; value: React.ReactNode; onPress?: () => void; };

export interface HeaderProps {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    imageColor?: ColorHex;
    style?: StyleProp<ViewStyle>;
    left?: HeaderSide;
    right?: HeaderSide;
};