import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from '../backgroundimage.jpeg';
import styles from './HomeLoginSignupStyling';
import CheckPersistence from '../firebase/CheckPersistence';

function HomeScreen() {
  const navigation = useNavigation();

  if (CheckPersistence()) {
    navigation.navigate('MainContainer');
  }

  const handleLogin = () => {
    // Navigate to the AnotherScreen
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    // Navigate to the AnotherScreen
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
              <Text style={styles.text}>“Success in this game depends less on strength of body than strength of mind and character.”</Text>
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