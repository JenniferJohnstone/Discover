import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppText from '../Componants/AppText'
import AppView from '../Componants/AppView'
import AppButton from '../Componants/AppButton'
import AppColors from '../Config/appColors'

function Categories({ navigation }) {

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <AppText> App Loading </AppText>
    }



    return (
        <AppView style={styles.screen}>

            <AppText style={styles.title}>Categories</AppText>
            <AppView style={styles.buttonRows}>
                <AppButton title='Places to visit' color='White' BackgroundColor='Orange' size={20} style={styles.visit} onPress={() => navigation.navigate('FilteredList', { category: 'Place to visit' })} />

                <AppButton title='Places to eat' color='White' BackgroundColor='Red' size={20} style={styles.visit} onPress={() => navigation.navigate('FilteredList', { category: 'Place to eat' })} />
            </AppView>
            <AppView style={styles.buttonRows}>
                <AppButton title='Places to stay' color='White' BackgroundColor='Yellow' size={20} style={styles.visit} onPress={() => navigation.navigate('FilteredList', { category: 'Place to stay' })} />
                <AppButton title='Things to do' color='White' BackgroundColor='Blue' size={20} style={styles.visit} onPress={() => navigation.navigate('FilteredList', { category: 'Thing to do' })} />
            </AppView>

            <AppButton title={'Add Listing '} color='Yellow' BackgroundColor='DarkRed' size={20} style={styles.AddListing}>
                <MaterialCommunityIcons name="plus-circle" size={30} color={'white'} />

            </AppButton>


        </AppView >
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: AppColors.Green,
        alignItems: 'center',
        flex: 6,
        paddingTop: 50,
    },
    title: {
        color: AppColors.Yellow,
        fontFamily: 'VarelaRound_400Regular',
        fontSize: 30

    },
    buttonRows: {
        flexDirection: 'row',
        paddingBottom: 0,
        justifyContent: 'flex-start'
    },
    visit: {
        height: 180,
    },
    bottomButton: {
        alignContent: 'center',
        paddingTop: 0
    },
    AddListing: {
        width: 300,
        height: 120,
        marginBottom: 20,
        paddingBottom: 20
    },

})

export default Categories;