import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Page } from '@/src/components/layout/Page/';
import { Header } from '@/src/components/themed/Header';

import { HomeLandingProps, HomeStackParamList } from '@/src/app/Navigation';

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