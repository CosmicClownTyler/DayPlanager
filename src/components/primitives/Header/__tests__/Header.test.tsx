import { View, Text } from 'react-native';

import { fireEvent, render, screen } from '@testing-library/react-native';

import { Header } from '../Header';

describe('<Header />', () => {
    // Header title
    it('Title renders text correctly in Header', () => {
        render(
            <Header
                title='Header Title'
            />
        );

        screen.getByText('Header Title');
    });
    // Header left component
    it('Left renders text correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                left={{
                    type: 'text',
                    value: 'Left Text'
                }}
            />
        );

        screen.getByText('Left Text');
    });
    it('Left renders image correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                }}
            />
        );

        screen.getByRole('image');
    });
    it('Left renders component correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                left={{
                    type: 'component',
                    value: (
                        <View>
                            <Text>
                                Text in left sub-view
                            </Text>
                        </View>
                    ),
                }}
            />
        );

        screen.getByText('Text in left sub-view');
    });
    it('Left onPress works correctly in Header', () => {
        const mockOnPress = jest.fn();

        render(
            <Header
                title='Header Title'
                left={{
                    type: 'text',
                    value: 'Left Text',
                    onPress: mockOnPress
                }}
            />
        );

        fireEvent.press(screen.getByRole('button'));

        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
    // Header right component
    it('Right renders text correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                right={{
                    type: 'text',
                    value: 'Right Text'
                }}
            />
        );

        screen.getByText('Right Text');
    });
    it('Right renders image correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                right={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-right.png'),
                }}
            />
        );

        screen.getByRole('image');
    });
    it('Right renders component correctly in Header', () => {
        render(
            <Header
                title='Header Title'
                right={{
                    type: 'component',
                    value: (
                        <View>
                            <Text>
                                Text in right sub-view
                            </Text>
                        </View>
                    ),
                }}
            />
        );

        screen.getByText('Text in right sub-view');
    });
    it('Right onPress works correctly in Header', () => {
        const mockOnPress = jest.fn();

        render(
            <Header
                title='Header Title'
                right={{
                    type: 'text',
                    value: 'Right Text',
                    onPress: mockOnPress
                }}
            />
        );

        fireEvent.press(screen.getByRole('button'));

        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});