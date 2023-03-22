import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../AuthScreens/WelcomeScreen';
import SignIn from '../AuthScreens/SignIn';
import SignUp from '../AuthScreens/SignUp';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (

            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#0e1529'
                    },
                    headerShown: false
                }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Sign In" component={SignIn} />
                <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>

    );
}