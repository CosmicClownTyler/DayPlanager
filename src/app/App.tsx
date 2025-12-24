import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeIcon, SettingsIcon } from '@/src/components/TabBarIcons';

import HomeScreen from '@/src/screens/HomeScreen';
import SettingsScreen from '@/src/screens/SettingsScreen';

import type { RootBottomTabParamList } from '@/src/app/Navigation';

export default function App() {
    return (
        <SafeAreaProvider>
            <AppComponent />
        </SafeAreaProvider>
    );
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export function AppComponent() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    // Header options
                    headerShown: false,
                    // Bottom tab options
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderWidth: 0,
                        borderTopWidth: 1,
                        borderColor: '#666',
                    },
                    tabBarInactiveTintColor: "#666",
                    tabBarActiveTintColor: '#fff',
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