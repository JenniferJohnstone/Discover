import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'

function Login() {
    return (
        <AppView style={styles.screen}>

            <Image source={require('../images/globe.png')} style={styles.image} />
            <View style={styles.underline}>
                <MaterialCommunityIcons name="email" size={20} color={AppColors.Blue} style={{ padding: 0 }} />
                <TextInput placeholder="Email" style={styles.input}></TextInput>
            </View>



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
        backgroundColor: AppColors.Green
    },
    input: {
        width: 200,
        textAlign: 'center',
        color: AppColors.Yellow,
        fontSize: 20,
    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: AppColors.Orange,
        flexDirection: 'row',
    }
})

export default Login;