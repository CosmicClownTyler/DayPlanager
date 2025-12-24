import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootBottomTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    Settings: NavigatorScreenParams<SettingsStackParamList>;
};
export type HomeStackParamList = {
    Landing: undefined;
};
export type SettingsStackParamList = {
    Landing: undefined;
    DateTime: undefined;
    Notifications: undefined;
    Behaviour: undefined;
    Layout: undefined;
    Theme: undefined;
};