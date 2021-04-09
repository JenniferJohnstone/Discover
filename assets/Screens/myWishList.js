import React, { useState } from 'react';
import { StyleSheet, Image, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppView from '../Componants/AppView'
import appColors from '../Config/appColors';
import AppText from '../Componants/AppText'
import PlaceList from '../Files/places'
import Seperator from '../Componants/Seperator'

function myWishList() {

    const [placeList, setPlaceList] = useState(PlaceList)

    const deleteItem = (item) => {
        const newList = placeList.filter(placeList => placeList.id !== item.id)
        setPlaceList(newList)
    }

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }

    // I tried seperating this componant into a seperate file but it didn't quite work, hope it doesn't make things look too messy
    const renderItem = ({ item }) => {

        return (
            <Swipeable renderRightActions={() => {
                return (
                    <TouchableOpacity style={styles.delete} onPress={() => deleteItem(item)}>
                        <MaterialCommunityIcons name="delete" size={50} color={appColors.Blue} />
                    </TouchableOpacity>
                )
            }}>

                <TouchableOpacity style={styles.listItem} onPress={() => setPlaceList(PlaceList)}>
                    <Image source={item.image} style={styles.listImage} />
                    <View style={styles.bio}>
                        <AppText style={styles.listTitle}>{item.title}</AppText>
                        <AppText style={styles.tagline}>{item.category}</AppText>
                        <AppText style={styles.tagline, { color: appColors.DarkRed }}>{item.country}</AppText>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        )
    }


    return (
        <View style={styles.flexbox}>
            <AppView style={styles.container}>
                <Image source={require('../images/globe.png')} style={styles.image} />
                <AppText style={styles.title}>My Wish List</AppText>

                <AppView style={styles.logoutContainer}>
                    <MaterialCommunityIcons name="exit-to-app" size={50} color={appColors.Blue} style={styles.icon} />
                    <AppText style={styles.logout}>Logout</AppText>
                </AppView>

            </AppView>

            <AppView style={styles.list}>
                <FlatList data={placeList} renderItem={renderItem} keyExtractor={(item) => item.id} ItemSeparatorComponent={Seperator} />
            </AppView>

            <AppView style={styles.menuBar}>
            </AppView>

        </View>
    );
}

const styles = StyleSheet.create({
    flexbox: {
        flexDirection: 'column',
        backgroundColor: appColors.Green,
        flex: 6,
        paddingTop: 30
    },
    image: {
        width: 70,
        height: 70,
    },
    container: {
        paddingTop: 0,
        flexDirection: 'row',
    },
    title: {
        color: appColors.Yellow,
        paddingTop: 25,
        fontSize: 30,
        fontFamily: 'VarelaRound_400Regular',
    },
    icon: {
        textAlign: 'right',
        marginRight: 10
    },
    logout: {
        fontSize: 15,
        paddingLeft: 45,
        color: appColors.Yellow,
    },
    logoutContainer: {
        paddingTop: 0,
        flexDirection: 'column',
        textAlign: 'right',
    },
    list: {
        backgroundColor: 'white',
        paddingTop: 0,
        backgroundColor: appColors.Green,
        flexDirection: 'column',
        flex: 5,
        paddingLeft: 10,
        alignItems: 'center'

    },
    listImage: {
        width: 150,
        height: 100
    },
    listItem: {
        paddingTop: 10,
        flexDirection: 'row',
    },
    listTitle: {
        color: appColors.Yellow,
        fontSize: 20,
        fontFamily: 'VarelaRound_400Regular',

    },
    tagline: {
        fontSize: 15,
        fontFamily: 'VarelaRound_400Regular',
        color: appColors.Blue,
        paddingTop: 10
    },
    bio: {
        paddingLeft: 10,
        overflow: 'scroll'
    },
    menuBar: {
        backgroundColor: 'white',
        paddingTop: 0,
    }

})

export default myWishList;