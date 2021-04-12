import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import TabNavigator from './TabNavigator'
import FilteredList from '../Screens/FilteredList'
import Categories from '../Screens/Categories'
import DetailPage from '../Screens/DetailPage'
import CityView from '../Screens/CityView'
import Edit from '../Screens/Edit'
import AddPlace from '../Screens/AddPlace'

const Stack = createStackNavigator();

function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="WishList" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="CityView" component={CityView} options={{ headerShown: false }} />
            <Stack.Screen name="FilteredList" component={FilteredList} options={{ headerShown: false }} />
            <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
            <Stack.Screen name="DetailPage" component={DetailPage} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
            <Stack.Screen name="AddPlace" component={AddPlace} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AuthNavigation;