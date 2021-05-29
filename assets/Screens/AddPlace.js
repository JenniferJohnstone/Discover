import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import AppButton from '../Componants/AppButton';
import addListing from '../functions/addListing'


function AddPlace({ navigation }) {

    const [selectedCategory, setSelectedCategory] = useState('Place to stay');
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [selectedCounty, setSelectedCountry] = useState('Fira Town')

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickerResult.uri });

    }

    return (
        <ScrollView>
            <View style={styles.screen}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color={appColors.DarkRed} style={styles.icon} />
                </TouchableOpacity>

                <AppText style={styles.heading}>Create Listing</AppText>


                <Formik
                    initialValues={{
                        title: '', country: '', description: '', address: '', image: selectedImage, category: selectedCategory,
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log('something wrong', values.title)
                        if (selectedImage == null || values.title == '' || values.country == '' || values.description == '' || values.address == '') {
                            alert('please fill in all required fields before submitting')
                            // note to self, you need to update your delpoyed app
                        } else {
                            values.image = selectedImage
                            values.id = String(Math.random())
                            values.category = selectedCategory
                            values.country = selectedCounty
                            addListing(values)
                            navigation.goBack()

                        }
                    }}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder={'Name'} value={values.title} style={styles.title} onChangeText={handleChange("title")} selectTextOnFocus={true} maxLength={18} />
                            </View>

                            <View style={{ backgroundColor: 'white', padding: 5, marginTop: 20 }}>
                                <Picker
                                    selectedValue={selectedCounty}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCountry(itemValue)
                                    }
                                    style={{ height: 50, width: 150 }}
                                >
                                    <Picker.Item label="Fira Town" value="Fira Town" />
                                    <Picker.Item label="Sydney" value="Sydney" />
                                    <Picker.Item label="New York" value="New York" />
                                    <Picker.Item label="Abu Dabi" value="Abu Dabi" />
                                    <Picker.Item label="London" value="London" />
                                    <Picker.Item label="Tokyo" value="Tokyo" />


                                </Picker>
                            </View>

                            <TouchableOpacity onPress={openImagePickerAsync}>
                                <AppText style={styles.picker}>Pick a picture</AppText>
                            </TouchableOpacity>

                            {selectedImage !== null &&
                                <>
                                    <Image
                                        source={{ uri: selectedImage.localUri }}
                                        style={styles.thumbnail}
                                    />
                                </>
                            }

                            <View style={styles.textBody}>

                                <TextInput placeholder={'description'} onChangeText={handleChange("description")} values={values.description} multiline={true} maxLength={100} style={styles.bio} />

                                <AppView style={{ alignItems: 'center', marginTop: 30 }}>
                                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                                    <TextInput placeholder={'address'} onChangeText={handleChange("address")} values={values.address} selectTextOnFocus={true} />
                                </AppView>

                            </View>

                            <View style={{ backgroundColor: 'white', padding: 5, marginTop: 20 }}>
                                <Picker
                                    selectedValue={selectedCategory}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedCategory(itemValue)
                                    }
                                    style={{ height: 50, width: 150 }}
                                >
                                    <Picker.Item label="Places to visit" value="Place to visit" />
                                    <Picker.Item label="Places to eat" value="Place to eat" />
                                    <Picker.Item label="Places to stay" value="Place to stay" />
                                    <Picker.Item label="Things to do" value="Thing to do" />

                                </Picker>
                            </View>

                            <AppButton title="Submit" color="DarkRed" BackgroundColor="Orange" onPress={handleSubmit} />

                        </>
                    )}

                </Formik>


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
    },
    picker: {
        backgroundColor: appColors.Yellow,
        padding: 10,
        fontSize: 20,
        marginTop: 10
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }
})

export default AddPlace;