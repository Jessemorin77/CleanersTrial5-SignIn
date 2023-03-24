import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack, XStack } from 'tamagui';
import { useAuth } from './src/hooks/useAuth';
import UserStack from './src/navigation/userStack';
import AuthStack from './src/navigation/authStack';
import DrawerNavigation from './src/navigation/drawerStack'; // Make sure the path is correct
import config from './tamagui.config';
import { useFonts } from 'expo-font';
import {NativeBaseProvider} from "native-base";

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
export default function App() {
    const { user } = useAuth();
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <NativeBaseProvider>
                <TamaguiProvider config={config}>
                    <Theme name={colorScheme === 'dark'? 'dark' : 'light' }>
                        <NavigationContainer>
                            {user ? <UserStack /> : <AuthStack />}
                            <StatusBar style="auto" />
                        </NavigationContainer>
                    </Theme>
                </TamaguiProvider>
            </NativeBaseProvider>
        </ApplicationProvider>


    );
}



/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from './src/hooks/useAuth';
import UserStack from './src/navigation/userStack';
import AuthStack from './src/navigation/authStack';
import DrawerNavigation from './src/navigation/drawerStack'; // Make sure the path is correct
export default function RootNavigation() {
  const { user } = useAuth();

  return (
      <NavigationContainer>
        {user ? <UserStack /> : <AuthStack />}
      </NavigationContainer>
  );
}*/

/**/