import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import Places from '../Files/places'
import AppButton from '../Componants/AppButton'
import DataManager from '../Config/DataManager'

function DetailPage({ navigation, route }) {

    console.log('this is the place id', route.params.id)

    const getPlace = (id) => {
        let commonData = DataManager.getInstance();
        let place = commonData.getPlace(id)
        return place
    }

    console.log('this is the route params', route.params)
    const item = getPlace(route.params.id)

    console.log('this is get place', item)

    const removeItem = (id) => {
        let commonData = DataManager.getInstance();
        commonData.removePlace(id)
        let user = commonData.getUserID()
        commonData.removeFromWishList(id, user)
        navigation.navigate('WishList')

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
                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                    <AppText style={{ fontSize: 15 }}>{item.address}</AppText>
                </AppView>

            </View>

            <View style={styles.row}>
                <AppButton style={styles.edit} BackgroundColor="DarkRed" onPress={() => removeItem(item.id)}>
                    <MaterialCommunityIcons name="delete" size={30} color={appColors.White} style={{ marginRight: 10 }} />
                </AppButton>
                <AppButton style={styles.edit} BackgroundColor={"Blue"} onPress={() => navigation.navigate('Edit', { id: item.id })}>
                    <MaterialCommunityIcons name="pencil-outline" size={30} color={appColors.White} style={{ marginRight: 10 }} />
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
        fontSize: 20

    },
    edit: {
        justifyContent: 'center',
        height: 80,
        width: 80,
        margin: 10
    },
    icon: {
        padding: 10,
    }
})

export default DetailPage;