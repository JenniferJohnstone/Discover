import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'


import AppView from '../Componants/AppView.js'
import AppColors from '../Config/appColors.js'
import AppText from '../Componants/AppText'
import AppButton from '../Componants/AppButton'





function Welcome({ navigation }) {

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <Text> App Loading </Text>
    }

    return (
        <AppView style={styles.screen}>

            <AppText style={styles.title}>Discover</AppText>

            <Image source={require('../images/globe.png')} style={styles.image} />

            <AppText style={styles.subtitle}>All the things you'd want to do in one place.</AppText>

            <AppButton style={styles.button} title="Login" BackgroundColor="Blue" color="White" size={20} onPress={() => navigation.navigate("Login")} />
            <AppButton style={styles.button} title="Register" BackgroundColor="Green" color="White" size={20} onPress={() => navigation.navigate("Register")} />


        </AppView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F4F8FB',
        alignItems: 'center',
        paddingTop: 50
    },
    image: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 50,
        color: '#248ed0',
        fontFamily: 'VarelaRound_400Regular'
    },
    subtitle: {
        fontSize: 20,
        width: 300,
        textAlign: 'center',
        color: '#248ed0',
        fontFamily: 'VarelaRound_400Regular',
        paddingBottom: 10
    },
    button: {
        height: 80,
        width: 300,
    }

})

export default Welcome;