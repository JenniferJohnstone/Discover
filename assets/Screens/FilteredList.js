import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'

import appColors from '../Config/appColors'
import AppText from '../Componants/AppText'
import AppView from '../Componants/AppView'
import DataManager from '../Config/DataManager'


function FilteredList({ navigation, route }) {

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }

    const getPlaces = () => {
        let commonData = DataManager.getInstance();
        return commonData.getPlaceList()

    }

    //let's try filtering this place  list to see if it contains the newly added location, maybe try doing it at back end too
    const places = getPlaces()

    var placeList = places.filter(place => {
        return (place.country == route.params.country)
    })

    placeList = placeList.filter(place => {
        return (place.category == route.params.category)
    })

    const renderItem = ({ item }) => {


        return (
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DetailPage', { id: item.id })}>
                <ImageBackground source={{ uri: item.image }} style={styles.listImage} >
                    <View style={styles.darkOverlay}>
                        <AppText style={styles.listTitle}>{item.title}</AppText>
                    </View>
                </ImageBackground>
                <View style={styles.bio}>
                    <AppText style={styles.tagline}>{item.category}</AppText>
                    <AppText style={[styles.tagline, { color: appColors.DarkBlue, }]}>{item.country}</AppText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>

            <AppView style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color={appColors.DarkBlue} style={styles.icon, { margin: 10, marginTop: 13 }} />
                </TouchableOpacity>

                <AppText style={styles.title}>{route.params.category}</AppText>

            </AppView>

            <FlatList style={styles.list} data={placeList} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal={false} numColumns={2} />


        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        backgroundColor: appColors.White,
        flex: 6,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: appColors.DarkBlue,
        fontFamily: 'VarelaRound_400Regular',
        flex: 5,
        margin: 10
    },
    list: {
        height: 550,
        marginTop: 30
    },
    listItem: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 160,
        height: 130,

    },
    listImage: {
        width: 150,
        height: 90,
    },
    bio: {
        overflow: 'scroll',
        width: 150,
    },
    listTitle: {
        color: appColors.White,
        fontSize: 17,
        fontFamily: 'VarelaRound_400Regular',
        textAlign: 'center'

    },
    tagline: {
        fontSize: 15,
        fontFamily: 'VarelaRound_400Regular',
        color: appColors.Blue,
        paddingTop: 5,
        textAlign: 'center'

    },
    row: {
        flexDirection: 'row',
        height: 100
    },
    icon: {
        paddingLeft: 5,
    },
    darkOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
    }
})

export default FilteredList;