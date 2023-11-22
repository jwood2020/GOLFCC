/* App.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This is the entry file of the app, each page that is navigated
   to is linked here. 
*/

/* Import this at the top of your entry file */
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Import the screens */
import HomeScreen from './page/HomeScreen'; 
import LoginScreen from './page/LoginScreen';
import SignupScreen from './page/SignupScreen';
import MainContainer from './page/navigation/MainContainer';
import MainScreen from './page/navigation/screens/MainScreen';
import Menu from './page/navigation/screens/Menu';
import TeeTimes from './page/navigation/screens/TeeTimes';
import Settings from './page/navigation/screens/Settings';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="TeeTimes" component={TeeTimes} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;