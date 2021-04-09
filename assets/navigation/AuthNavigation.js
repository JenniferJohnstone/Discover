import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import WishList from '../Screens/myWishList'



const Stack = createStackNavigator();

function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="WishList" component={WishList} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default AuthNavigation;