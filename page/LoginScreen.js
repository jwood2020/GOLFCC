/* page/LoginScreen.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program is the frontend view of the login page.
*/

import { View, 
         Text, 
         TextInput, 
         TouchableOpacity, 
         ImageBackground } 
from 'react-native';

import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import React, { useState } from 'react';
import LoginUser from '../firebase/LoginUser';
import styles from './HomeLoginSignupStyling';


function LoginScreen() {
    const navigation = useNavigation();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /* The navigation must be separated from view code,
      so we put it here. */
    const onFooterLinkPress = () => {
      navigation.navigate('Signup')
    }

    /* Asynchronous function so that we can force the function to 
      wait for LoginUser to run and return the correct value. 
      Without making the function asynchronous and the using await, 
      LoginUser will run asynchronously and the if statement will 
      always evaluate to True. */
    async function handleLogin() {
        if (await LoginUser(email, password)) {
            navigation.navigate('MainContainer')
        }
    }

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

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footertext}>
                        Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Signup</Text>
                    </Text>
                </View>
            </ImageBackground>
        </View> 
    );
}


export default LoginScreen;
