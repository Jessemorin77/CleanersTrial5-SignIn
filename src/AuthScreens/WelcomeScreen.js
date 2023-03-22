import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Paragraph, XStack, YStack, Stack} from "tamagui";
import { useColorScheme } from 'react-native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <Stack f={1} jc="center" ai="center" backgroundColor="$backgroundSoft">
                <Paragraph color="$color" jc="center">
                    {colorScheme}
                </Paragraph>
                <Text style={styles.title}>Welcome to Cleaners App</Text>
                {/* Add any other content you want in the WelcomeScreen */}
                <Button
                    title="Sign In"
                    onPress={() => navigation.navigate('Sign In')}
                />
            </Stack>


        </View>
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
