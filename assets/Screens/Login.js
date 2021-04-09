import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round'
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppView from '../Componants/AppView'
import AppColors from '../Config/appColors'
import AppText from '../Componants/AppText'
import AppButton from '../Componants/AppButton'
import Users from '../Files/users'

function Login() {

    // I haven't figured out a better way to use a custom font, if I try to do this same trick with AppText it doesn't work 

    let [fonts_loaded] = useFonts({
        VarelaRound_400Regular,
    })

    if (!fonts_loaded) {
        return <Text> App Loading </Text>
    }

    const schema = Yup.object().shape(
        {
            email: Yup.string().required().email().label("Email"),
            password: Yup.string().required().min(4).max(8).label("Password"),
        }
    )

    const users = Users

    const validateUser = ({ email, password }) => {
        const yes = users.filter(user => user.email == email)
        console.log(users)
        console.log(yes)

        return (
            users.filter(user => user.email == email && user.password == password).length > 0
            //returns true or false
        )
    }

    return (
        <AppView style={styles.screen}>

            <Image source={require('../images/globe.png')} style={styles.image} />


            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => {
                    console.log(values)
                    if (validateUser(values.email, values.password)) {
                        console.log(values)
                    }
                }}
                validationSchema={schema}
            >

                {({ handleChange, handleSubmit, errors }) => (
                    <>

                        <View style={styles.underline}>
                            <MaterialCommunityIcons name="email" size={20} color={AppColors.Blue} style={{ paddingTop: 30 }} />
                            <TextInput placeholder="Email" style={styles.input} onChangeText={handleChange("email")} keyboardType="email-address" textContentType="emailAddress" ></TextInput>
                        </View>
                        <AppText>{errors.email}</AppText>
                        <View style={styles.underline}>
                            <MaterialCommunityIcons name="lock" size={20} color={AppColors.Blue} style={{ paddingTop: 30 }} />
                            <TextInput placeholder="Password" style={styles.input} onChangeText={handleChange("password")} textContentType="password"></TextInput>
                        </View>
                        <AppText>{errors.password}</AppText>


                        <AppButton title='login' style={{ flexDirection: 'row', width: 200, marginTop: 20 }} BackgroundColor="Orange" color="Blue" onPress={handleSubmit} />

                    </>
                )}

            </Formik>



            <AppText style={styles.password}>Forgot Password?</AppText>

            <AppText style={styles.registration}>Don't have an account yet?</AppText>
            <AppText style={[styles.password, { fontSize: 15, paddingTop: 5 }]}>Sign Up</AppText>



        </AppView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    },
    screen: {
        alignItems: 'center',
        backgroundColor: AppColors.Green,
    },
    input: {
        width: 200,
        textAlign: 'center',
        color: AppColors.Yellow,
        fontSize: 20,
        fontFamily: 'VarelaRound_400Regular',
        padding: 10,
        paddingTop: 30

    },
    underline: {
        borderBottomWidth: 2,
        borderBottomColor: AppColors.Orange,
        flexDirection: 'row',
    },
    password: {
        color: AppColors.DarkRed,
        fontSize: 18,
        fontFamily: 'VarelaRound_400Regular',
        paddingTop: 25
    },
    registration: {
        color: AppColors.Yellow,
        fontSize: 15,
        paddingTop: 50,
    }
})

export default Login;