/* page/navigation/screens/Settings.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays user information and lets the user log out.
*/

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import LogoutUser from '../../../firebase/LogoutUser';
import background from '../../../backgroundimage.jpeg';
import ReturnUser from '../../../firebase/ReturnUser';
import styles from './TabPagesStyling';


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
                imageStyle={styles.backgroundImage}
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

export default Settings;