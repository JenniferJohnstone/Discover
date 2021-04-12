import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const TabNav = createBottomTabNavigator();

import WishList from '../Screens/myWishList'
import CityView from '../Screens/CityView'
import appColors from '../Config/appColors'

const TabNavigator = () =>
(
    <TabNav.Navigator tabBarOptions={{
        activeTintColor: appColors.Orange,
        inactiveTintColor: 'black',
    }}>
        <TabNav.Screen name="WishList" component={WishList} options={{
            tabBarIcon: () => {
                return (
                    <MaterialCommunityIcons name="playlist-star" size={30} color={appColors.Blue} />
                )
            }
        }} />
        <TabNav.Screen name="CityView" component={CityView} options={{
            tabBarIcon: () => {
                return (
                    <MaterialCommunityIcons name="city" size={30} color={appColors.Blue} />
                )
            }
        }} />
    </TabNav.Navigator>
)


export default TabNavigator

