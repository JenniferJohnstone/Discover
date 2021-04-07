import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { MaterialCommunityIcons } from '@expo/vector-icons'



import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'
import AppText from '../Componants/AppText'
import AppButton from '../Componants/AppButton'


function Register() {

    // I haven't figured out a better way to use a custom font, if I try to do this same trick with AppText it doesn't work 

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <Text> App Loading </Text>
    }

    return (
        <AppView style={styles.screen}>

            <AppText style={styles.title}>Create Account</AppText>

            <AppView style={styles.labelContainer}>
                <AppText style={styles.label}>Name</AppText>
                <TextInput placeholder=' ' style={styles.underline} />
                <AppView style={styles.together}>
                    <AppText style={[styles.label, { paddingTop: 20 }]}>Password</AppText>
                    <MaterialCommunityIcons name="eye" size={20} color={AppColors.Blue} />
                    <TextInput placeholder=' ' style={styles.underline} secureTextEntry='true' />
                </AppView>
                <AppText style={styles.label}>Email</AppText>
                <TextInput placeholder=' ' style={styles.underline} />
                <AppText style={styles.label}>Mobile Number</AppText>
                <TextInput placeholder=' ' style={styles.underline} />

                <AppText style={styles.registration}>Already registered? <View style={styles.login}>Login</View></AppText>

                <AppButton title='Register' BackgroundColor='Red' color='Yellow' style={styles.Button} />

            </AppView>

        </AppView>

    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: AppColors.Green,
        alignItems: 'center'
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
        paddingTop: 50

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
        color: AppColors.DarkRed,

    },
    Button: {
        padding: 10
    },
    together: {
        flexDirection: 'column',
        paddingTop: 5,
        textAlign: 'right'
    }
})

export default Register;