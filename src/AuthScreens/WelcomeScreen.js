import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Paragraph, XStack, YStack, Stack, Heading} from "tamagui";
import { useColorScheme } from 'react-native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (

            <Stack f={1} jc="center" ai="center" backgroundColor="black" >

                <Heading color="white" size="$10">Welcome</Heading>
                {/* Add any other content you want in the WelcomeScreen */}
                <Button
                    title="Sign In"
                    onPress={() => navigation.navigate('Sign In')}
                />
            </Stack>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default WelcomeScreen;
