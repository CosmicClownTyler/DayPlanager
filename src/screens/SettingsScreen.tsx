import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page } from '@/src/components/layout/Page/';
import { Header } from '@/src/components/themed/Header';

import {
    SettingsAboutProps,
    SettingsBehaviourProps,
    SettingsCreditsProps,
    SettingsDateTimeProps,
    SettingsLandingProps,
    SettingsLayoutProps,
    SettingsNotificationsProps,
    SettingsStackParamList,
    SettingsThemeProps,
} from '@/src/app/Navigation';
import { Button } from 'react-native';

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsScreen() {
    return (
        <SettingsStack.Navigator initialRouteName='Landing' screenOptions={{ headerShown: false }} >
            <SettingsStack.Screen name='Landing' component={Landing} />
            <SettingsStack.Screen name='DateTime' component={DateTime} />
            <SettingsStack.Screen name='Notifications' component={Notifications} />
            <SettingsStack.Screen name='Behaviour' component={Behaviour} />
            <SettingsStack.Screen name='Layout' component={Layout} />
            <SettingsStack.Screen name='Theme' component={Theme} />
            <SettingsStack.Screen name='About' component={About} />
            <SettingsStack.Screen name='Credits' component={Credits} />
        </SettingsStack.Navigator>
    );
};

function Landing({ navigation, route }: SettingsLandingProps) {
    return (
        <Page>
            <Header title='Settings' />
            <Button title='Date & Time' onPress={() => { navigation.navigate('DateTime'); }} />
            <Button title='Notifications' onPress={() => { navigation.navigate('Notifications'); }} />
            <Button title='Behaviour' onPress={() => { navigation.navigate('Behaviour'); }} />
            <Button title='Layout' onPress={() => { navigation.navigate('Layout'); }} />
            <Button title='Theme' onPress={() => { navigation.navigate('Theme'); }} />
            <Button title='About' onPress={() => { navigation.navigate('About'); }} />
            <Button title='Credits' onPress={() => { navigation.navigate('Credits'); }} />
        </Page>
    );
};

// General
function DateTime({ navigation, route }: SettingsDateTimeProps) {
    return (
        <Page>
            <Header
                title='Date & Time'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};
function Notifications({ navigation, route }: SettingsNotificationsProps) {
    return (
        <Page>
            <Header
                title='Notifications'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};
function Behaviour({ navigation, route }: SettingsBehaviourProps) {
    return (
        <Page>
            <Header
                title='Behaviour'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};

// Display & Appearance
function Layout({ navigation, route }: SettingsLayoutProps) {
    return (
        <Page>
            <Header
                title='Layout'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};
function Theme({ navigation, route }: SettingsThemeProps) {
    return (
        <Page>
            <Header
                title='Theme'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};

// About
function About({ navigation, route }: SettingsAboutProps) {
    return (
        <Page>
            <Header
                title='About'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};
function Credits({ navigation, route }: SettingsCreditsProps) {
    return (
        <Page>
            <Header
                title='Credits'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
        </Page>
    );
};