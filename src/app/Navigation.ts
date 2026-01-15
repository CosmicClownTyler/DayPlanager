import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
    About: undefined;
    Credits: undefined;
};

// Home stack route props
export type HomeLandingProps = NativeStackScreenProps<HomeStackParamList, 'Landing'>;

// Settings stack route props
export type SettingsLandingProps = NativeStackScreenProps<SettingsStackParamList, 'Landing'>;
export type SettingsDateTimeProps = NativeStackScreenProps<SettingsStackParamList, 'DateTime'>;
export type SettingsNotificationsProps = NativeStackScreenProps<SettingsStackParamList, 'Notifications'>;
export type SettingsBehaviourProps = NativeStackScreenProps<SettingsStackParamList, 'Behaviour'>;
export type SettingsLayoutProps = NativeStackScreenProps<SettingsStackParamList, 'Layout'>;
export type SettingsThemeProps = NativeStackScreenProps<SettingsStackParamList, 'Theme'>;
export type SettingsAboutProps = NativeStackScreenProps<SettingsStackParamList, 'About'>;
export type SettingsCreditsProps = NativeStackScreenProps<SettingsStackParamList, 'Credits'>;