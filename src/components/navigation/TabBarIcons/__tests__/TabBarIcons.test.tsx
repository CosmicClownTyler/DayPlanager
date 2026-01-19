import { render, screen } from '@testing-library/react-native';

import { HomeIcon, SettingsIcon } from '../TabBarIcons';

describe('<HomeIcon />', () => {
    it('HomeIcon renders correctly', () => {
        render(
            <HomeIcon color={'#ffffff'} size={30} />
        );

        screen.getByRole('image');
    });
    it('HomeIcon has correct label', () => {
        render(
            <HomeIcon color={'#ffffff'} size={30} />
        );

        screen.getByA11yHint('Home');
    });
});

describe('<SettingsIcon />', () => {
    it('SettingsIcon renders correctly', () => {
        render(
            <SettingsIcon color={'#ffffff'} size={30} />
        );

        screen.getByRole('image');
    });
    it('SettingsIcon has correct label', () => {
        render(
            <SettingsIcon color={'#ffffff'} size={30} />
        );

        screen.getByA11yHint('Settings');
    });
});