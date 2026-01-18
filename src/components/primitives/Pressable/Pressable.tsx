import { Pressable as BasePressable } from 'react-native';
import type { PressableProps } from './types';

export function Pressable(props: PressableProps) {
    // Deconstruct props
    const { ...rest } = props;

    return (
        <BasePressable
            accessible
            accessibilityRole='button'
            {...rest}
        />
    );
};