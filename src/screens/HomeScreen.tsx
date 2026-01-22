import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page } from '@/components/layout/Page/';
import { Header } from '@/components/themed/Header';

import type { HomeLandingProps, HomeStackParamList } from '@/app/Navigation';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeScreen() {
    return (
        <HomeStack.Navigator initialRouteName='Landing' screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name='Landing' component={Landing} />
        </HomeStack.Navigator>
    );
};

function Landing({ navigation, route }: HomeLandingProps) {
    return (
        <Page>
            <Header title='Home' />
        </Page>
    );
};