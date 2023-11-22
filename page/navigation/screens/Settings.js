/* page/navigation/screens/Settings.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays user information and lets the user log out.
*/

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LogoutUser from '../../../firebase/LogoutUser';
import background from '../../../backgroundimage.jpeg';
import ReturnUser from '../../../firebase/ReturnUser';


function Settings({navigation}) {

    /* ReturnUser will return an array with the user's name in the 
       first spot and the user's email in the second spot. */
    const user_info = ReturnUser();
    const user = user_info[0];
    const email = user_info[1];

    /* When the user logs out, take them back to the main screen */
    function handleLogout() {
        LogoutUser();
        navigation.navigate('Main');
    }

    return(
        <View style={styles.viewContainer}>
            
            <ImageBackground
                style={styles.backgroundContainer}
                imageStyle={styles.image}
                source={background}
            >
                <View style={styles.container}>
                    <Text style={styles.headingText}>Fox Run Golf Club</Text>
                    <View style={styles.rightAlignText}>

                        <Text style={styles.logoutText} 
                            onPress= {() => handleLogout()}>
                            Log Out
                        </Text> 

                    </View>
                    
                </View>

                <View style={styles.divider} />

                <Text style={styles.text}>Name: {user}</Text>
                <Text style={styles.text}>Email: {email}</Text>
            
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewContainer: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingVertical: 50,
        backgroundColor: 'black',
    },
    image: { 
        opacity: .4 
    },
    logoutText: {
        color: 'white',
    },
    headingText: {
        fontSize: 26,
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    bodyText: {
        color: 'white',
        paddingLeft: 10,
        paddingTop: 10
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'gray', 
        marginVertical: 10,
      },
    text: {
        color: 'white',
        marginVertical: 5,
    }
})

export default Settings;