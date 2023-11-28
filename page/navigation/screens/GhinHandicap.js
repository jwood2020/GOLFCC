/* page/navigation/screens/GhinHandicap.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file allows user's to post golf scores directly
   into the Ghin Handicap system.
*/

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import background from '../../../backgroundimage.jpeg';
import styles from './TabPagesStyling';

function GhinScreen ({navigation}) {
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
                        In order to enhance the functionality of this 
                        screen, we have implemented a seamless 
                        connection to a GHIN Handicap system server/
                        app. Through this server/app, users will be able to 
                        sign into their accounts and effortlessly entering
                        their scores. Additionally, they will be able to view
                        their updated handicaps, all within a single app.
                    </Text>
                </View>
            
            </ImageBackground>
        </View>
    );
};

export default GhinScreen