/* page/HomeScreen.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program is the frontend view of the very first page the
   user will see.
*/

import { React, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import styles from './HomeLoginSignupStyling';
import CheckLoggedIn from '../firebase/CheckLoggedIn';


function HomeScreen() {
    const navigation = useNavigation();

    /* forces this to only run once, synchronously */
    useEffect(() => {

        /* If user is already logged in then the user does not need to log in
           again */
        if (CheckLoggedIn()) {
            navigation.navigate('MainContainer');
        }
    }, []);

    /* The navigation must be separated from view code, so we put it here. */
    const handleLogin = () => {
      /* Navigate to the Login page */
      navigation.navigate('Login');
    };

    const handleSignup = () => {
      /* Navigate to the Signup page */
      navigation.navigate('Signup');
    };

    return (
        <View style={styles.root}>
            <ImageBackground
                style={styles.container}
                imageStyle={styles.image}
                source={background}
            >
                <Text style={styles.heading}>GOLFCC</Text>

                <Text style={styles.text}>
                    “Success in this game depends less on strength of 
                    body than strength of mind and character.”
                </Text>

                <Text style={styles.quotetext}>-Arnold Palmer</Text>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        
    );
}

export default HomeScreen;