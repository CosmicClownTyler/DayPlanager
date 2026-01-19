import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import { Pressable } from '../Pressable';

describe('<Image />', () => {
    it('Pressable renders components correctly', () => {
        render(
            <Pressable>
                <Text>
                    Test page text
                </Text>
            </Pressable>
        );

        screen.getByText('Test page text');
    });
    it('Pressable renders button correctly', () => {
        render(
            <Pressable>
                <Text>
                    Test page text
                </Text>
            </Pressable>
        );

        screen.getByRole('button');
    });
});