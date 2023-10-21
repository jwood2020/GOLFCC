import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import React, { useState } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Signup')
  }

  const onSuccessLogin = () => {
      navigation.navigate('MainContainer');
  }

  const handleLogin = () => {

    firebase.app().auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        onSuccessLogin();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Login failed. Please check your credentials.');
    });
  }

  const styles = StyleSheet.create({
    root: { 
      flex: 1,
    },
    container: {
      flex: 1,  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
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
      textAlignVertical: 'center',
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
    text: {
      textAlign: 'center', 
      fontWeight: 'bold', 
      color: 'white',
      textShadowRadius: 5, 
      textShadowColor: 'black',
    },
    quotetext: {
      textAlign: 'center', 
      fontWeight: 'bold', 
      color: 'white',
      textShadowRadius: 5, 
      textShadowColor: 'black',
      marginBottom: 20,

    }
});

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
                  <Text style={styles.text}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Signup</Text></Text>
                </View>
        </ImageBackground>
      </View> 
    );
  }


export default LoginScreen;
