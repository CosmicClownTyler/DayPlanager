import { Image as BaseImage } from 'react-native';
import type { ImageProps } from './types';

export function Image(props: ImageProps) {
    // Deconstruct props
    const { ...rest } = props;

    return (
        <BaseImage
            accessible
            accessibilityRole='image'
            {...rest}
        />
    );
};