import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'


import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import AppButton from '../Componants/AppButton'
import DataManager from '../Config/DataManager'

function DetailPage({ navigation, route }) {

    const getPlace = (id) => {
        let commonData = DataManager.getInstance();
        let place = commonData.getPlace(id)
        return place
    }

    const addToWishList = (placeId) => {
        let commonData = DataManager.getInstance();
        let userId = commonData.getUserID()
        console.log('heres the user id at the details page omg', commonData.getUserID())
        commonData.addToWishList(placeId, userId)
        navigation.navigate('WishList')
    }

    const item = getPlace(route.params.id)

    const removeItem = (id) => {
        let commonData = DataManager.getInstance();
        commonData.removePlace(id)
        let user = commonData.getUserID()
        commonData.removeFromWishList(id, user)
        navigation.navigate('WishList')
    }

    const handleDelete = (id) => {
        Alert.alert("Delete Item", "deleting this item will permanately remove it from this app, do you wish to proceed?",
            [{ text: "yes", onPress: () => removeItem(id) },
            { text: 'no' }])
    }


    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }

    return (
        <AppView style={styles.screen}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="arrow-left" size={20} color={appColors.DarkRed} style={styles.icon} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <AppText style={styles.title}>{item.title}</AppText>
            </View>

            <AppText style={styles.country}>{item.country}</AppText>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textBody}>
                <AppText style={styles.bio}>{item.description}</AppText>
                <AppView style={{ alignItems: 'center' }}>
                    <AppText style={[styles.address, { fontSize: 18, color: appColors.Red }]}>Address:</AppText>
                    <AppText style={styles.address}>{item.address}</AppText>
                </AppView>

            </View>
            <View style={styles.row}>
                <AppButton style={styles.edit} BackgroundColor="DarkRed" onPress={() => handleDelete(item.id)}>
                    <MaterialCommunityIcons name="delete" size={30} color={appColors.White} style={{ marginRight: 10 }} />
                </AppButton>
                <AppButton style={styles.edit} BackgroundColor={"Blue"} onPress={() => navigation.navigate('Edit', { id: item.id })}>
                    <MaterialCommunityIcons name="pencil-outline" size={30} color={appColors.White} style={{ marginRight: 10 }} />
                </AppButton>
                <AppButton style={styles.edit} BackgroundColor={"Red"} onPress={() => addToWishList(item.id)} >
                    <MaterialCommunityIcons name="cards-heart" size={30} color={appColors.White} style={{ marginRight: 10 }} />
                </AppButton>
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
        fontSize: 35,
        marginBottom: 5,
        paddingLeft: 5,
        fontFamily: 'VarelaRound_400Regular',

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
        fontFamily: 'VarelaRound_400Regular',

    },
    row: {
        flexDirection: 'row',
        marginTop: 20
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
        fontSize: 20,
        fontFamily: 'VarelaRound_400Regular',


    },
    edit: {
        justifyContent: 'center',
        height: 80,
        width: 80,
        margin: 10
    },
    icon: {
        padding: 10,
    },
    address: {
        fontSize: 15,
        fontFamily: 'VarelaRound_400Regular',

    }
})

export default DetailPage;