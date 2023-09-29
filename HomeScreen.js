import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    header: {
      fontSize: 24,
      marginBottom: 40,
    },
    button: {
      backgroundColor: 'blue',
      width: '80%',
      height: 50,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });