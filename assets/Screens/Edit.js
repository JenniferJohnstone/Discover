import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';

import AppView from '../Componants/AppView'
import AppText from '../Componants/AppText'
import appColors from '../Config/appColors'
import Places from '../Files/places'
import DataManager from '../Config/DataManager'
import AppButton from '../Componants/AppButton';


function DetailPage({ navigation, route }) {

    const getItem = () => {
        let commonData = DataManager.getInstance();
        return commonData.getPlace(route.params.id)

    }

    var item = getItem()

    const [selectedCounty, setSelectedCountry] = useState(item.country)
    const [selectedCategory, setSelectedCategory] = useState(item.category);
    const [selectedImage, setSelectedImage] = useState(item.image);




    const submitEdit = (id, newItem) => {
        let commonData = DataManager.getInstance();
        newItem.id = item.id
        newItem.image = selectedImage
        newItem.category = selectedCategory
        newItem.country = selectedCounty
        commonData.editPlace(id, newItem)
        navigation.navigate('WishList')
    }

    //test to see if this is working properly 

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage(pickerResult.uri);

    }

    const RenderImage = () => {
        if (selectedImage === item.image) {
            return (
                <>
                    <Image source={{ uri: item.image }} style={styles.thumbnail} />

                </>
            )
        } else return (
            <>
                <Image
                    source={{ uri: selectedImage }}
                    style={styles.thumbnail}
                />
            </>
        )
    }

    return (
        <ScrollView>
            <View style={styles.screen}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color={appColors.DarkRed} style={styles.icon} />
                </TouchableOpacity>

                <AppText>Edit Mode: Tap any field to make an edit</AppText>

                <Formik
                    initialValues={{ title: item.title, country: item.country, description: item.description, address: item.address }}
                    onSubmit={(values) => {
                        submitEdit(item.id, values)
                    }}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput placeholder={item.title} value={values.title} onChangeText={handleChange("title")} style={styles.title} selectTextOnFocus={true} maxLength={18} />
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

                            <RenderImage style={{ margin: 0, padding: 0 }} />

                            <View style={styles.textBody}>

                                <TextInput
                                    multiline={true}
                                    maxLength={100}
                                    placeholder={item.description}
                                    value={values.description}
                                    onChangeText={handleChange("description")}
                                    style={styles.bio}
                                />

                                <AppView style={{ alignItems: 'center' }}>
                                    <AppText style={{ fontSize: 18, color: appColors.Red }}>Address:</AppText>
                                    <TextInput selectTextOnFocus={true} placeholder={item.address} value={values.address} onChangeText={handleChange("address")} />
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

                            <AppButton title="Submit" color="DarkRed" BackgroundColor="Orange" onPress={handleSubmit} style={styles.submit} />



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
    },
    submit: {
        width: 200,
        height: 100
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
        resizeMode: "contain",
        margin: 0
    }
})

export default DetailPage;