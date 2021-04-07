import React from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppView from '../Componants/AppView'
import appColors from '../Config/appColors';
import AppText from '../Componants/AppText'
import PlaceList from '../Files/places'



function myWishList() {

    const placeList = PlaceList

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }

    const renderItem = ({ item }) => {
        return (<AppView style={styles.listItem}>
            <Image source={item.image} style={styles.listImage} />
            <AppView style={styles.bio}>
                <AppText style={styles.listTitle}>{item.title}</AppText>
                <AppText style={styles.tagline}>{item.category} - {item.country}</AppText>
            </AppView>
        </AppView>)
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
                <FlatList data={placeList} renderItem={renderItem} />
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
        flex: 6
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
        marginRight: 10,
        color: appColors.Yellow
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
        flex: 4,
        paddingLeft: 10,
        justifyContent: 'space-between'
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
        paddingTop: 0,
        flexDirection: 'column',
        paddingLeft: 10,
    },
    menuBar: {
        backgroundColor: 'white'
    }

})

export default myWishList;