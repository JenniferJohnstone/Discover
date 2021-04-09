import React from 'react';
import { Text, StyleSheet, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { MaterialCommunityIcons } from '@expo/vector-icons'



import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'
import AppText from '../Componants/AppText'
import AppButton from '../Componants/AppButton'


function Register({ navigation }) {

    // I haven't figured out a better way to use a custom font, if I try to do this same trick with AppText it doesn't work

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <Text> App Loading </Text>
    }

    return (

        <AppView style={styles.screen}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}
            >

                <AppText style={styles.title}>Create Account</AppText>

                <AppView style={styles.labelContainer}>
                    <AppText style={styles.label}>Name</AppText>
                    <TextInput placeholder=' ' style={styles.underline} />
                    <AppView style={styles.together}>
                        <AppText style={styles.label}>Password</AppText>
                        <MaterialCommunityIcons name="eye" size={20} color={AppColors.Blue} style={{ textAlign: 'right', }} />
                        <TextInput placeholder=' ' style={styles.underline} />
                    </AppView>

                    <AppText style={styles.label}>Email</AppText>
                    <TextInput placeholder=' ' style={styles.underline} />
                    <AppText style={styles.label}>Mobile Number</AppText>
                    <TextInput placeholder=' ' style={styles.underline} />


                    <AppText style={[styles.registration, { paddingBottom: 70 }]}>Already registered?
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}><AppText style={styles.login}> Login</AppText></TouchableOpacity>
                    </AppText>

                    <AppButton title='Register' BackgroundColor='Red' color='Yellow' style={styles.Button} />

                </AppView>
            </KeyboardAvoidingView>


        </AppView >

    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: AppColors.Green,
        alignItems: 'center',
        paddingTop: 50
    },
    title: {
        fontFamily: 'VarelaRound_400Regular',
        fontSize: 30,
        color: AppColors.Yellow,
        textAlign: 'center'

    },
    label: {
        textAlign: 'left',
        fontFamily: 'VarelaRound_400Regular',
        color: AppColors.Yellow,
        paddingTop: 10

    },
    labelContainer: {
        width: 250,
        margin: 40,
        paddingTop: 0,
        height: 10,
    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: AppColors.DarkRed,
    },
    registration: {
        color: AppColors.Yellow,
        fontSize: 15,
        paddingTop: 50,
        textAlign: 'center'
    },
    login: {
        marginTop: 10,
        color: AppColors.DarkRed,
        fontWeight: 'bold',
    },
    Button: {
        padding: 20
    },
    together: {
        flexDirection: 'column',
        paddingTop: 0,
        textAlign: 'right'
    }
})

export default Register;