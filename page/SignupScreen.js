/* page/SignupScreen.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program is the frontend view of the signup page.
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
import AddUser from "../firebase/AddUser";
import styles from './HomeLoginSignupStyling';


function SignupScreen() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [courseCode, setCourseCode] = useState('')

    const navigation = useNavigation();

    /* The navigation must be separated from view code,
       so we put it here. */
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    /* Asynchronous function so that we can force the function to 
       wait for AddUser to run and return the correct value. 
       Without making the function asynchronous and the using await, 
       AddUser will run asynchronously and the if statement will 
       always evaluate to True. */
    async function onSignupPress() {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }

        /* Add a user, if user enters faulty data then do not take
           them to main screen. */
        if (email !== "" && password !== "" && fullName !== "" && courseCode !== "") {
            if (await AddUser(email, password, courseCode, fullName)) {
                navigation.navigate('MainContainer')
            }
        }

        else {
            alert("Please Enter a Name, an Email, a Password, and a CourseCode ");
        }

        return;
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
                    placeholder='Full Name'
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor={'white'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'white'}
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'white'}
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'white'}
                    placeholder='Golf Course Code'
                    onChangeText={(text) => setCourseCode(text)}
                    value={courseCode}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSignupPress()}>
                    <Text style={styles.buttonText}>Create account</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footertext}>
                        Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text>
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignupScreen;