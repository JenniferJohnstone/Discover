import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const TabNav = createBottomTabNavigator();

import WishList from '../Screens/myWishList'
import Categories from '../Screens/Categories'
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
        <TabNav.Screen name="Categories" component={Categories} options={{
            tabBarIcon: () => {
                return (
                    <MaterialCommunityIcons name="checkbox-multiple-blank" size={30} color={appColors.Blue} />
                )
            }
        }} />
    </TabNav.Navigator>
)


export default TabNavigator

