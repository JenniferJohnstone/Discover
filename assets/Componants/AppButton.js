import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import appColors from '../Config/appColors';

import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'


function AppButton({ title, BackgroundColor = "Yellow", color = "Green", onPress, style, size = 20, children }) {

    useFonts({
        VarelaRound_400Regular,
    })

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={[styles.button, style, { backgroundColor: appColors[BackgroundColor] }]}>
                <Text style={[styles.text, { fontSize: size, color: appColors[color] }]}> {title} </Text>
                {children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'

    },

    text: {
        fontFamily: "VarelaRound_400Regular",
        textAlign: 'center'
    },

})

export default AppButton;