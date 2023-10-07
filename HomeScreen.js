import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import background from './backgroundimage.jpeg';

function HomeScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate to the AnotherScreen
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    // Navigate to the AnotherScreen
    navigation.navigate('Signup');
  };

  const styles = StyleSheet.create({
    root: { flex: 1},
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
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold', 
    },
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