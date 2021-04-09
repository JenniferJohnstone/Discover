import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function AppView({ children, style }) {
    return (
        <SafeAreaView style={[styles.Screen, style]}>

            {children}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        paddingTop: 0
    }
})

export default AppView;