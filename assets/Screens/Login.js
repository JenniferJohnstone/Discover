import React from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';

import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'

function Login() {
    return (
        <AppView style={styles.screen}>

            <Image source={require('../images/globe.png')} style={styles.image} />
            <TextInput placeholder="Email" style={styles.line}></TextInput>


            
        </AppView>
    );
}

const styles = StyleSheet.create({
    image : {
        width: 300, 
        height: 300
    },
    screen : {
        alignItems: 'center', 
        backgroundColor: AppColors.Green
    },
    line: {
        width: 200, 
        borderBottomWidth: 2,
        borderBottomColor: AppColors.Orange, 
        textAlign: 'center', 
        color: AppColors.Yellow, 
        fontSize: 20, 
    }
})

export default Login;