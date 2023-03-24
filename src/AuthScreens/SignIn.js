import React, { useState } from "react";
import {Paragraph, XStack, YStack, Stack, Heading, Input} from "tamagui";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function SignInScreen({ navigation }) {
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
    });

    async function signIn() {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: "Email and password are mandatory.",
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            });
        }
    }

    return (
        <Stack f={1} jc="center" ai="center" backgroundColor="black" >
            <Heading  color="white" size="$9" marginBottom="$4">Sign In</Heading>
            <Input
                size="$3"
                marginBottom="$3"
                width="80%"
                borderWidth={2}
                placeholder="Email"
                value={value.email}
                onChangeText={(text) => setValue({ ...value, email: text })}
            />
            <Input
                size="$3"
                width="80%"
                borderWidth={2}
                placeholder="Password"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Paragraph color="white" size="$5">
                Don't have an account?{" "}
                <Text
                    style={styles.signupLink}
                    onPress={() => navigation.navigate("Sign Up")}
                >
                    Sign Up
                </Text>
            </Paragraph>
        </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#007bff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    signupText: {
        textAlign: "center",
    },
    signupLink: {
        color: "#007bff",
        textDecorationLine: "underline",
    },
});

export default SignInScreen;
