import React from 'react';
import { NavigationContainer } from '@react-navigation/native';



import Login from './assets/Screens/Login'
import Welcome from './assets/Screens/Login'
import AuthNavigation from './assets/navigation/AuthNavigation'



export default function App() {
  return (
    <NavigationContainer>

      <AuthNavigation />

    </NavigationContainer>
  );
}
