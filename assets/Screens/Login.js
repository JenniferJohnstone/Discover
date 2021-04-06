import React, {useState} from 'react';
import { Image, StyleSheet, TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {useFonts, VarelaRound_400Regular} from '@expo-google-fonts/varela-round'


import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'
import AppText from '../Componants/AppText'

function Login() {

   const [email, setEmail] = useState(null)
   const [password, setPassword] = useState(null)

    // I haven't figured out a better way to use a custom font, if I try to do this same trick with AppText it doesn't work 

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if(!fonts_loaded){
        return <Text> App Loading </Text>
    }


    return (
        <AppView style={styles.screen}>

            <Image source={require('../images/globe.png')} style={styles.image} />



            <View style={styles.underline}>
                <MaterialCommunityIcons name="email" size={20} color={AppColors.Blue} style={{ paddingTop: 30 }}/>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" ></TextInput>
            </View>
            <View style={styles.underline}>
                <MaterialCommunityIcons name="lock" size={20} color={AppColors.Blue} style={{ paddingTop: 30 }} />
                <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} textContentType="password"></TextInput>
            </View>



            <AppText style={styles.password}>Forgot Password?</AppText>

            <AppText style={styles.registration}>Don't have an account yet?</AppText>
            <AppText style={[styles.password, {fontSize: 15, paddingTop: 5}]}>Sign Up</AppText>



        </AppView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    },
    screen: {
        alignItems: 'center',
        backgroundColor: AppColors.Green,
    },
    input: {
        width: 200,
        textAlign: 'center',
        color: AppColors.Yellow,
        fontSize: 20,
        fontFamily: 'VarelaRound_400Regular',
        padding: 10, 
        paddingTop: 30 

    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: AppColors.Orange,
        flexDirection: 'row',
    },
    password: {
        color: AppColors.DarkRed, 
        fontSize: 18,
        fontFamily: 'VarelaRound_400Regular',
        paddingTop: 25
    }, 
    registration: {
        color: AppColors.Yellow, 
        fontSize: 15,
        paddingTop: 100,
    }
})

export default Login;