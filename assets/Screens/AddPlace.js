import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import Places from '../Files/places'

function AddPlace({ navigation }) {

    const [selectedLanguage, setSelectedLanguage] = useState();


    return (
        <ScrollView>
            <View style={styles.screen}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color={appColors.DarkRed} style={styles.icon} />
                </TouchableOpacity>

                <AppText style={styles.heading}>Create Listing</AppText>


                <Formik
                    initialValues={{
                        title: '', country: '', description: '', address: '', image: "http://dummyimage.com/225x100.png/5fa2dd/ffffff", category: 'Place to eat',
                    }}
                    onSubmit={(values) => {

                    }}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder={'Name'} value={values.title} style={styles.title} onChangeText={handleChange("title")} selectTextOnFocus={true} maxLength={18} />
                            </View>

                            <TextInput placeholder={'country'} onChangeText={handleChange("country")} values={values.country} selectTextOnFocus={true} style={styles.country} />

                            <View style={styles.textBody}>

                                <TextInput placeholder={'description'} onChangeText={handleChange("description")} values={values.description} multiline={true} maxLength={100} style={styles.bio} />

                                <AppView style={{ alignItems: 'center', marginTop: 30 }}>
                                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                                    <TextInput placeholder={'address'} onChangeText={handleChange("address")} values={values.address} selectTextOnFocus={true} />
                                </AppView>

                            </View>

                        </>
                    )}

                </Formik>

                <View style={{ backgroundColor: 'white', padding: 5, marginTop: 20 }}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={{ height: 50, width: 150 }}
                    >
                        <Picker.Item label="Places to visit" value="Places to visit" />
                        <Picker.Item label="Places to eat" value="Places to eat" />
                        <Picker.Item label="Places to stay" value="Places to stay" />
                        <Picker.Item label="Things to do" value="Things to do" />

                    </Picker>
                </View>


            </View>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    category: {
        textAlign: 'center'
    },
    heading: {
        fontSize: 40,
        color: appColors.Yellow
    },
    screen: {
        flex: 6,
        backgroundColor: appColors.Green,
        paddingTop: 50,
        alignItems: 'center',
        overflow: 'scroll',
        paddingBottom: 150
    },
    title: {
        color: appColors.Red,
        fontSize: 30,
        marginBottom: 5,
        marginTop: 30,
        padding: 10,
        backgroundColor: 'white'
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
        color: appColors.Yellow,
        marginBottom: 10,
        fontSize: 20,
        marginTop: 30
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

export default AddPlace;