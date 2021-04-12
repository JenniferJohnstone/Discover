import React from 'react';
import { StyleSheet, FlatList, ImageBackground, View, TouchableOpacity } from 'react-native';

import AppText from '../Componants/AppText';
import AppView from '../Componants/AppView';
import appColors from '../Config/appColors';
import cities from '../Files/cities'


function CityView({ route, navigation }) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.city} onPress={() => navigation.navigate('Categories', { name: item.name })}>
                <ImageBackground source={{
                    uri: item.picture,
                }} style={{ width: 100, height: 100 }}>
                    <View style={styles.darkOverlay}>
                        <AppText style={{ color: appColors.White }}>{item.name}</AppText>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <AppView style={styles.screen}>

            <AppText style={styles.title}>Cities</AppText>

            <FlatList data={cities} renderItem={renderItem} keyExtractor={(item) => item.id} horizontal={false} numColumns={2} />

        </AppView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: appColors.Green,
        paddingTop: 50,
        flex: 6,
        alignItems: 'center'
    },
    city: {
        padding: 20,
    },
    darkOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: appColors.Yellow
    },

})

export default CityView;