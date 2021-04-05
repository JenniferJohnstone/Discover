import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import appColors from '../Config/appColors';

import {useFonts, VarelaRound_400Regular} from '@expo-google-fonts/varela-round'


function AppButton({title, BackgroundColor="Yellow" , color="Yellow", onPress, style, size=100}) {

    useFonts({
        VarelaRound_400Regular,
    })

    return (
        <TouchableOpacity onPress={onPress} style={[style]}>
            <View style={[styles.button, {backgroundColor: appColors[BackgroundColor]}]}>
                <Text style={[styles.text, {fontSize: size, color: appColors[color]}]}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1, 
        margin: 10, 
        textAlign: 'center', 
        justifyContent: "center",
        padding: 5, 
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: 'grey'
    },

    text: {
        fontFamily: "VarelaRound_400Regular", 
        textAlign: 'center'
    }
})

export default AppButton;