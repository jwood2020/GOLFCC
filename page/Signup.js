import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import React, { useState } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const RegistrationScreen = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        
        firebase.app().auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home');
            })

            .catch(error => {console.log(error); alert(error);})
    }


  const styles = StyleSheet.create({
    root: { flex: 1},
    container: {
      flex: 1,  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    text: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'white',
        textShadowRadius: 5, 
        textShadowColor: 'black',
        marginBottom: 40,
    },
    image: { opacity: .4 },
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
});

  return (
    <View style={styles.root}>

            <ImageBackground
              style={styles.container}
              imageStyle={styles.image}
              source={background}
            >
            <Text style={styles.text}>Signup</Text>
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}>
                <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footertext}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </View>
        </ImageBackground>
    </View>
    );
}

export default RegistrationScreen;
