import { Text, View } from 'react-native';

import { Image } from '@/components/primitives/Image/';
import { Pressable } from '@/components/primitives/Pressable/';

import { headerStyles } from './styles';
import type { HeaderProps } from './types';

export function Header(props: HeaderProps) {
    // Deconstruct props
    const { title, titleStyle, imageColor, style, left, right } = props;

    // Initial empty left and right components
    let leftComponent = null;
    let rightComponent = null;

    // Configure the side components
    if (left) {
        // Configure the left component based on the type
        switch (left.type) {
            case 'text':
                leftComponent = (
                    <Text style={[headerStyles.headerText, headerStyles.leftText, titleStyle]}>
                        {left.value}
                    </Text>
                );
                break;
            case 'image':
                leftComponent = (
                    <Image
                        tintColor={imageColor}
                        source={left.value}
                        style={[headerStyles.headerImage, headerStyles.leftImage]}
                    />
                );
                break;
            case 'component':
                leftComponent = left.value;
                break;
        }

        // Configure the behaviour if onPress is set
        if (left.onPress) {
            leftComponent = (
                <Pressable onPress={left.onPress}>
                    {leftComponent}
                </Pressable>
            );
        }
    }
    if (right) {
        // Configure the right component based on the type
        switch (right.type) {
            case 'text':
                rightComponent = (
                    <Text style={[headerStyles.headerText, headerStyles.rightText, titleStyle]}>
                        {right.value}
                    </Text>
                );
                break;
            case 'image':
                rightComponent = (
                    <Image
                        tintColor={imageColor}
                        source={right.value}
                        style={[headerStyles.headerImage, headerStyles.rightImage]}
                    />
                );
                break;
            case 'component':
                rightComponent = right.value;
                break;
        }

        // Configure the behaviour if onPress is set
        if (right.onPress) {
            rightComponent = (
                <Pressable onPress={right.onPress}>
                    {rightComponent}
                </Pressable>
            );
        }
    }

    return (
        <View style={[headerStyles.header, style]}>
            <View style={[headerStyles.outer, headerStyles.left]}>
                {leftComponent}
            </View>
            <View style={headerStyles.center}>
                <Text style={[headerStyles.headerText, titleStyle]}>
                    {title}
                </Text>
            </View>
            <View style={[headerStyles.outer, headerStyles.right]}>
                {rightComponent}
            </View>
        </View>
    );
};