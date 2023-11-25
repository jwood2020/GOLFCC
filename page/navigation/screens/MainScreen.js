/* page/navigation/screens/MainScreen.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file is the Home file for a golf course. This is the
   first file that a user sees after logging in.
*/

import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import background from '../../../backgroundimage.jpeg';
import styles from './TabPagesStyling';

function MainScreen({navigation}) {
    return(
        <View style={styles.viewContainer}>

            <ImageBackground
              style={styles.mainContainer}
              imageStyle={styles.backgroundImage}
              source={background}
            >
            <View>
                <Text style={styles.headingText}>Fox Run Golf Club</Text>

                <View style={styles.divider} />

                <Text style={styles.bodyText}>
                    Fox Run Golf Club located in Council Bluffs, IA 
                    offers some of the finest and most well-
                    maintained playing conditions in the Metro Area.
                </Text>
            </View>
            
        </ImageBackground>
    </View>
    );
};

export default MainScreen