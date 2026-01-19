import { render, screen } from '@testing-library/react-native';

import { Image } from '../Image';

describe('<Image />', () => {
    it('Image renders correctly', () => {
        render(
            <Image source={require('@/assets/icons/arrow-left.png')} />
        );

        screen.getByRole('image');
    });
});