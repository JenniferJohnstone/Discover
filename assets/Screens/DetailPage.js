import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'

function DetailPage(props) {
    return (
        <AppView style={styles.screen}>
            <AppText>Exit</AppText>
            <AppText style={styles.title}>TitlePlaceHolder</AppText>
        </AppView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 6,
        backgroundColor: appColors.Green,
    },
    title: {
        color: appColors.Yellow,
        textAlign: 'center',
        fontSize: 30
    }
})

export default DetailPage;