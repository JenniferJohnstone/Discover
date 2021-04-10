import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'

import Seperator from '../Componants/Seperator'
import places from '../Files/places'
import appColors from '../Config/appColors'
import AppText from '../Componants/AppText'
import AppView from '../Componants/AppView'

function FilteredList({ navigation, route }) {

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }

    const placeList = places.filter(place => {
        return (place.category == route.params.category)
    })


    const renderItem = ({ item }) => {


        return (
            <TouchableOpacity style={styles.listItem}>
                <ImageBackground source={item.image} style={styles.listImage} >
                    <View style={styles.darkOverlay}>
                        <AppText style={styles.listTitle}>{item.title}</AppText>
                    </View>
                </ImageBackground>
                <View style={styles.bio}>
                    <AppText style={styles.tagline}>{item.category}</AppText>
                    <AppText style={[styles.tagline, { color: appColors.DarkRed, }]}>{item.country}</AppText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>

            <AppView style={styles.row}>
                <TouchableOpacity onPress={() => navigation.navigate('WishList', {
                    screen: 'Categories',
                })}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color={appColors.DarkRed} style={styles.icon} />
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
        backgroundColor: appColors.Green,
        flex: 6,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: appColors.Yellow,
        fontFamily: 'VarelaRound_400Regular',
        flex: 5,
    },
    list: {
        height: 550,
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
        color: appColors.Yellow,
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