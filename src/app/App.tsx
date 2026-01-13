import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import type { RootBottomTabParamList } from '@/src/app/Navigation';
import { HomeIcon, SettingsIcon } from '@/src/components/navigation/TabBarIcons/';
import { useThemeColors } from '@/src/hooks/settings/theme/';
import HomeScreen from '@/src/screens/HomeScreen';
import SettingsScreen from '@/src/screens/SettingsScreen';
import { store } from '@/src/store/';

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <AppComponent />
            </Provider>
        </SafeAreaProvider>
    );
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export function AppComponent() {
    // Get the theme colors
    const themeColors = useThemeColors();

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={themeColors.background} barStyle={themeColors.isDark ? 'light-content' : 'dark-content'} />
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    // Header options
                    headerShown: false,
                    // Bottom tab options
                    tabBarStyle: {
                        backgroundColor: themeColors.background,
                        borderWidth: 0,
                        borderTopWidth: 1,
                        borderColor: themeColors.borders,
                    },
                    tabBarInactiveTintColor: themeColors.secondary,
                    tabBarActiveTintColor: themeColors.accent,
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Home')
                            return <HomeIcon color={color} size={size} />;
                        if (route.name === 'Settings')
                            return <SettingsIcon color={color} size={size} />;
                    },
                })}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};