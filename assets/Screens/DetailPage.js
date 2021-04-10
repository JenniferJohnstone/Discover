import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import Places from '../Files/places'

function DetailPage({ navigation, route }) {

    var item = Places.filter(place => {
        console.log(place.id, 'comparing', route.params.id)
        return (place.id == route.params.id)
    })

    item = item[0]

    console.log('heres the item', item)


    return (
        <AppView style={styles.screen}>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color={appColors.DarkRed} style={styles.icon} />
                </TouchableOpacity>
                <AppText style={styles.title}>{item.title}</AppText>
            </View>

            <AppText style={styles.country}>{item.country}</AppText>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textBody}>
                <AppText style={styles.bio}>{item.description}</AppText>
                <AppView style={styles.row}>
                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                    <AppText style={{ fontSize: 15 }}>{item.Address}</AppText>
                </AppView>
            </View>

        </AppView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 6,
        backgroundColor: appColors.Green,
        paddingTop: 50,
        alignItems: 'center'
    },
    title: {
        color: appColors.Yellow,
        textAlign: 'center',
        fontSize: 35,
        marginBottom: 5,
        flex: 4
    },
    image: {
        width: 300,
        height: 170
    },
    bio: {
        fontSize: 22,
        width: 300,
        textAlign: 'center',
        padding: 10,
    },
    row: {
        alignItems: 'center'
    },
    textBody: {
        backgroundColor: appColors.Yellow,
        color: appColors.DarkRed,
        height: 200,
        marginTop: 20
    },
    country: {
        color: appColors.DarkRed,
        marginBottom: 10,
        fontSize: 20

    }
})

export default DetailPage;