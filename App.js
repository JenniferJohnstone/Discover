import React from 'react';
import { NavigationContainer } from '@react-navigation/native';



import Login from './assets/Screens/Login'
import Welcome from './assets/Screens/Login'
import AuthNavigation from './assets/navigation/AuthNavigation'
import Categories from './assets/Screens/Categories'
import FilteredList from './assets/Screens/FilteredList'



export default function App() {
  return (


    <NavigationContainer>

      <AuthNavigation />

    </NavigationContainer>
  );
}
