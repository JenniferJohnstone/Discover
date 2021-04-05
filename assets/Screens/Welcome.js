import React from 'react';
import { StyleSheet , Image, Text} from 'react-native';

import AppView from '../Componants/AppView.js'
import AppColors from '../Config/appColors.js'
import AppText from '../Componants/AppText'
import AppButton from '../Componants/AppButton'

import {useFonts, VarelaRound_400Regular} from '@expo-google-fonts/varela-round'

 


function Welcome() {

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if(!fonts_loaded){
        return <Text> App Loading </Text>
    }

    return (
        <AppView style={styles.screen}>

            <AppText style={styles.title}>Discover</AppText>

            <Image source={require('../images/globe.png')} style={styles.image} />

            <AppText style={styles.subtitle}>All the things you'd want to do in one place.</AppText>

            <AppView style={styles.flexBox}>

            <AppButton style={styles.button} title="Login" BackgroundColor = "Orange" color="Blue" size={20} onPress={() => console.log('boop')} />            
            <AppButton style={styles.button} title="Register" BackgroundColor = "Red" color="Yellow" size={20} onPress={() => console.log('boop')} />


            </AppView>


            
        </AppView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.Green, 
        alignItems: 'center'
    }, 
    image : {
        width: 300, 
        height: 300
    },
    title: {
        fontSize: 50,
        color: AppColors.Yellow, 
        fontFamily: 'VarelaRound_400Regular'
    },
    subtitle: {
        fontSize: 20,
        width: 300, 
        textAlign: 'center', 
        color: AppColors.Yellow, 
        fontFamily: 'VarelaRound_400Regular'
    }, 
    flexBox: {
        flexDirection: 'column',
    }, 
    button : {
        height: 80, 
        width: 300, 
    }

})

export default Welcome;