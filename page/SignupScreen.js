import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import React, { useState } from 'react';
import AddUser from "../firebase/Users"

const SignupScreen = () => {
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
        if (await AddUser(email, password, courseCode, fullName)) {
            navigation.navigate('MainContainer')
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
                <Text style={styles.text}>“Success in this game depends less on strength of body than strength of mind and character.”</Text>
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
                    <Text style={styles.footertext}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
  root: { 
      flex: 1
  },

  container: {
      flex: 1,  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
  },

  text: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 5, 
    textShadowColor: 'black',
  },

  image: { 
      opacity: .4 
  },

  button: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', 
  },

  footertext: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 5, 
    textShadowColor: 'black',
    marginBottom: 40,
  },

  heading: {
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 5, 
    textShadowColor: 'black',
    marginBottom: 10,
  },

  quotetext: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: 'white',
    textShadowRadius: 5, 
    textShadowColor: 'black',
    marginBottom: 20,
  },
  
});