import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import React, { useState } from 'react';
import LoginUser from '../firebase/LoginUser';
import styles from './HomeLoginSignupStyling';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Signup')
  }

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
                  <Text style={styles.footertext}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Signup</Text></Text>
                </View>
        </ImageBackground>
      </View> 
    );
  }


export default LoginScreen;
