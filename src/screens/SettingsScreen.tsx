import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page } from '@/components/layout/Page/';
import { Header } from '@/components/themed/Header/';
import { ScrollView } from '@/components/themed/ScrollView/';
import { Cell, Section, Table } from '@/components/themed/Table/';
import { BodyText } from '@/components/themed/Text/';

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
} from '@/app/Navigation';
import { usePreferencesWeekStartsOn, usePreferencesShowExtraDays } from '@/hooks/settings/preferences';
import { useThemeAccentType, useThemeColorScheme } from '@/hooks/settings/theme';
import { useAppDispatch } from '@/hooks/store/';
import { setWeekStartsOn, setShowExtraDaysTrue, setShowExtraDaysFalse } from '@/store/settings/preferences/';
import {
    setAutomaticAccentColor,
    setAutomaticColorScheme,
    setCustomAccentColor,
    setDarkColorScheme,
    setLightColorScheme,
    setThemeAccentColor,
} from '@/store/settings/theme/';

import type { Weekday } from '@/features/Calendar/';
import type { ColorHex } from '@/features/ColorPicker/';

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
            <ScrollView>
                <Table>
                    <Section header='General'>
                        <Cell
                            title='Date & Time'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('DateTime'); }}
                        />
                        <Cell
                            title='Notifications'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('Notifications'); }}
                        />
                        <Cell
                            title='Behaviour'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('Behaviour'); }}
                        />
                    </Section>
                    <Section header='Display & Appearance'>
                        <Cell
                            title='Layout'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('Layout'); }}
                        />
                        <Cell
                            title='Theme & Colors'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('Theme'); }}
                        />
                    </Section>
                    <Section header='About'>
                        <Cell
                            title='About Day Planager'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('About'); }}
                        />
                        <Cell
                            title='Credits'
                            cellStyle='Basic'
                            accessory='DisclosureIndicator'
                            onPress={() => { navigation.navigate('Credits'); }}
                        />
                    </Section>
                </Table>
            </ScrollView>
        </Page>
    );
};

// General
function DateTime({ navigation, route }: SettingsDateTimeProps) {
    // Get necessary state
    const dispatch = useAppDispatch();
    const weekStartsOn = usePreferencesWeekStartsOn();
    const showExtraDays = usePreferencesShowExtraDays();

    // Functions for changing preferences
    const setWeekStartDay = (day: Weekday) => {
        dispatch(setWeekStartsOn(day));
    };
    const setShowExtraDays = (showExtraDays: boolean) => {
        if (showExtraDays) {
            dispatch(setShowExtraDaysTrue());
        }
        else {
            dispatch(setShowExtraDaysFalse());
        }
    };

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
            <ScrollView>
                <Table>
                    <Section header='First Day of the Week'>
                        <Cell
                            title='Sunday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'sunday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('sunday')}
                        />
                        <Cell
                            title='Monday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'monday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('monday')}
                        />
                        <Cell
                            title='Tuesday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'tuesday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('tuesday')}
                        />
                        <Cell
                            title='Wednesday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'wednesday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('wednesday')}
                        />
                        <Cell
                            title='Thursday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'thursday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('thursday')}
                        />
                        <Cell
                            title='Friday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'friday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('friday')}
                        />
                        <Cell
                            title='Saturday'
                            cellStyle='Basic'
                            accessory={weekStartsOn == 'saturday' ? 'Checkmark' : undefined}
                            onPress={() => setWeekStartDay('saturday')}
                        />
                    </Section>
                    <Section header='Show Extra Days'>
                        <Cell
                            title='Yes'
                            cellStyle='Basic'
                            accessory={showExtraDays ? 'Checkmark' : undefined}
                            onPress={() => setShowExtraDays(true)}
                        />
                        <Cell
                            title='No'
                            cellStyle='Basic'
                            accessory={!showExtraDays ? 'Checkmark' : undefined}
                            onPress={() => setShowExtraDays(false)}
                        />
                    </Section>
                </Table>
            </ScrollView>
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
    // Get necessary state
    const dispatch = useAppDispatch();
    const themeColorScheme = useThemeColorScheme();
    const themeAccentType = useThemeAccentType();

    // Functions for changing theme scheme and accent color
    const setSchemeAutomatic = () => {
        dispatch(setAutomaticColorScheme());
    };
    const setSchemeDark = () => {
        dispatch(setDarkColorScheme());
    };
    const setSchemeLight = () => {
        dispatch(setLightColorScheme());
    };
    const setAccentDefault = () => {
        dispatch(setAutomaticAccentColor());
    };
    const setAccentCustom = () => {
        dispatch(setCustomAccentColor());
    };
    const setAccentColor = (color: ColorHex) => {
        dispatch(setThemeAccentColor(color));
    };

    return (
        <Page>
            <Header
                title='Theme & Colors'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
            <ScrollView>
                <Table>
                    <Section header='Theme'>
                        <Cell
                            title='System'
                            cellStyle='Basic'
                            accessory={themeColorScheme == 'system' ? 'Checkmark' : undefined}
                            onPress={setSchemeAutomatic}
                        />
                        <Cell
                            title='Dark'
                            cellStyle='Basic'
                            accessory={themeColorScheme == 'dark' ? 'Checkmark' : undefined}
                            onPress={setSchemeDark}
                        />
                        <Cell
                            title='Light'
                            cellStyle='Basic'
                            accessory={themeColorScheme == 'light' ? 'Checkmark' : undefined}
                            onPress={setSchemeLight}
                        />
                    </Section>
                    <Section header='Accent Colors'>
                        <Cell
                            title='Default'
                            cellStyle='Basic'
                            accessory={themeAccentType == 'default' ? 'Checkmark' : undefined}
                            onPress={setAccentDefault}
                        />
                        <Cell
                            title='Custom'
                            cellStyle='Basic'
                            accessory={themeAccentType == 'custom' ? 'Checkmark' : undefined}
                            onPress={setAccentCustom}
                        />
                    </Section>
                </Table>
                {/* TODO */}
                {/* {themeAccentType == 'custom' && <ColorPicker />} */}
            </ScrollView>
        </Page>
    );
};

// About
function About({ navigation, route }: SettingsAboutProps) {
    return (
        <Page>
            <Header
                title='About the App'
                left={{
                    type: 'image',
                    value: require('@/assets/icons/arrow-left.png'),
                    onPress: navigation.goBack
                }}
            />
            <ScrollView>
                <BodyText>
                    Day Planager is a task manager, calendar, and reminders app, with a focus on customizability and optimization for personal workflows.
                </BodyText>
            </ScrollView>
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
            <ScrollView>
                <BodyText>
                    This app was created solely by me (Tyler Dalke), without using any code written from third parties, whether that be resources, blogs, or generative AI tools.
                </BodyText>
                <BodyText style={{ paddingTop: 0 }}>
                    I did refer to appropriate documentation throughout development, such as language, framework, or library documentation,
                    with the occasional reference of blogs and forums like Stack Overflow and Medium.
                </BodyText>
                <BodyText style={{ paddingTop: 0 }}>
                    However, no code was taken directly from any source; both documentation and forum code was used as a reference to learn and then implement/fix something on my own.
                </BodyText>
                <BodyText style={{ paddingTop: 0 }}>
                    All code, designs, and icons were created by me.
                </BodyText>
            </ScrollView>
        </Page>
    );
};