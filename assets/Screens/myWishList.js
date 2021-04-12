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
import Users from '../Files/users'
import DataManager from '../Config/DataManager'


function myWishList({ route, navigation }) {
    // var user = Users.find(user => user.email == route.params.email)

    const getUser = () => {
        let commonData = DataManager.getInstance();
        let userId = commonData.getUserID();
        return userId
    }

    const getWishList = (id) => {
        console.log('here I am running get wish list ')
        let commonData = DataManager.getInstance()
        let wishList = commonData.getWishList(id)
        return wishList
    }

    const removeItem = (placeId, userId) => {
        let commonData = DataManager.getInstance()
        commonData.removeFromWishList(placeId, userId)
        setPlaceList(getWishList(userId))
    }

    var user = Users.find(user => user.id == getUser())
    var wishList = getWishList(user.id)

    console.log('this is the wish list', wishList)

    const [placeList, setPlaceList] = useState(wishList)
    const [isFetching, setIsFetching] = useState(false);

    const fetchData = () => {
        setPlaceList(getWishList(user.id))
        setIsFetching(false);
    };

    const onRefresh = () => {
        setIsFetching(true);
        fetchData();
    };

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
                    <TouchableOpacity style={styles.delete} onPress={() => removeItem(item.id, user.id)}>
                        <MaterialCommunityIcons name="delete" size={50} color={appColors.Blue} />
                    </TouchableOpacity>
                )
            }}>

                <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DetailPage', { id: item.id })}>
                    <Image source={{ uri: item.image }} style={styles.listImage} />
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
                <AppText style={styles.title}>{user.name}'s Wish List</AppText>

                <AppView style={styles.logoutContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                        <MaterialCommunityIcons name="exit-to-app" size={50} color={appColors.Blue} style={styles.icon} />
                        <AppText style={styles.logout}>Logout</AppText>
                    </TouchableOpacity>
                </AppView>


            </AppView>

            <AppView style={styles.list}>
                <FlatList
                    data={placeList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={Seperator}
                    initialNumToRender={5}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
                />

                <AppText>Currently fixing a bug, please refresh this list after deleting or editing an item.</AppText>

            </AppView>



        </View>
    );
}

const styles = StyleSheet.create({
    flexbox: {
        flexDirection: 'column',
        backgroundColor: appColors.Green,
        flex: 6,
        paddingTop: 30,
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
        fontSize: 20,
        fontFamily: 'VarelaRound_400Regular',
    },
    icon: {
        textAlign: 'right',
        marginRight: 10
    },
    logout: {
        fontSize: 15,
        color: appColors.Yellow,
        textAlign: 'right',
        paddingRight: 10
    },
    logoutContainer: {
        paddingTop: 0,
        flexDirection: 'column',
        textAlign: 'right',
    },
    list: {
        paddingTop: 0,
        backgroundColor: appColors.Green,
        flexDirection: 'column',
        flex: 6,
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
    delete: {
        marginTop: 30
    }

})

export default myWishList;