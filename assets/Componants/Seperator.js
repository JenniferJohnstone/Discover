import React from 'react';
import { StyleSheet } from 'react-native';

import appColors from '../Config/appColors'
import AppView from '../Componants/AppView'

const Seperator = () => {
    return (<AppView style={styles.seperator}>
    </AppView>)
}

const styles = StyleSheet.create({
    seperator: {
        marginTop: 5,
        paddingTop: 2,
        width: "90%",
        backgroundColor: appColors.Orange,
    }
})

export default Seperator