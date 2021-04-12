import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import Places from '../Files/places'

function DetailPage({ navigation, route }) {

    var item = Places.filter(place => {
        return (place.id == route.params.id)
    })

    item = item[0]

    return (
        <ScrollView>
            <View style={styles.screen}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color={appColors.DarkRed} style={styles.icon} />
                </TouchableOpacity>

                <AppText>Edit Mode: Tap any field to make an edit</AppText>


                <Formik
                    initialValues={{ title: item.title, country: item.country, description: item.description, address: item.address }}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder={item.title} value={values.title} onChangeText={handleChange("title")} style={styles.title} selectTextOnFocus={true} maxLength={18} />
                            </View>

                            <TextInput selectTextOnFocus={true} placeholder={item.country} value={values.country} onChangeText={handleChange("country")} style={styles.country} />
                            <Image source={{ uri: item.image }} style={styles.image} />

                            <View style={styles.textBody}>

                                <TextInput multiline={true} maxLength={100} placeholder={item.description} value={values.description} onChangeText={handleChange("description")} style={styles.bio} />

                                <AppView style={{ alignItems: 'center' }}>
                                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                                    <TextInput selectTextOnFocus={true} placeholder={item.address} value={values.address} onChangeText={handleChange("address")} />
                                </AppView>


                            </View>


                        </>
                    )}
                </Formik>


            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 6,
        backgroundColor: appColors.Green,
        paddingTop: 50,
        alignItems: 'center',
        overflow: 'scroll',
        paddingBottom: 150
    },
    title: {
        color: appColors.Yellow,
        fontSize: 35,
        marginBottom: 5,
        // borderBottomWidth: 1,
        padding: 10
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
        fontSize: 20,
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