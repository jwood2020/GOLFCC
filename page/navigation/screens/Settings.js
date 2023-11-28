/* page/navigation/screens/Settings.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays user information and lets the user log out.
*/

import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';

import LogoutUser from '../../../firebase/LogoutUser';
import ReturnUser from '../../../firebase/ReturnUser';
import ReturnUserTeeTimes from '../../../firebase/ReturnUserTeeTimes';

import convertTime from './dates_and_times/convertTime';
import convertDate from './dates_and_times/convertDate';
import background from '../../../backgroundimage.jpeg';
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

    /* Object containing all the Tee Times data created by the user */
    const userTeeTimes = ReturnUserTeeTimes();

    /* Array containing the data we will display to the user */
    /* Each element of the array will be a tee time entry */
    let display_obj = [];

    /* loop through all the days in the data */
    for (day in userTeeTimes) {

        let times = [];

        /* Loop through all the times for that day */
        /* NOTE: This will be unsorted */
        for (time in userTeeTimes[day]) {
            times.push(time);
        }

        /* Sort those times and convert them to a more readable format */
        times = times.sort();
        let times_formatted = convertTime(times);

        /* Now loop through the times that were created for that day */
        for (index in times) {

            /* We want to display the more readable format, with the day */
            /* first. temp_obj will be an array with all the information */
            /* per tee time entry */
            let temp_obj = [];
            temp_obj.push(convertDate([day]));
            temp_obj.push(times_formatted[index]);

            /* Add all the players associated with this tee time */
            for (player in userTeeTimes[day][times[index]]) {
                temp_obj.push(
                    userTeeTimes[day][times[index]][player]['player']
                );
            }

            /* Add this tee time entry to the list of all tee time entries */
            display_obj.push(temp_obj);
        }
    }

    const TimeList = ({ display_obj }) => {

        /* Array of views - each view will be a tee time entry */
        var item_view = [];

        /* for each tee time entry */
        for (item_index in display_obj) {

            /* temp_obj will be an individual view */
            let temp_obj = [];

            /* for each piece of information associated with the tee time */
            for (index in display_obj[item_index]){

                /* We will use this to label the information */
                let label_str = '';

                /* The first piece of information is the date */
                if (Number(index) === 0) {
                    label_str = "Date: ";
                }

                else {
                    /* The second piece of information is the time */
                    if (Number(index) === 1) {
                        label_str = "Time: ";
                    }

                    /* The rest of the information is player information */
                    else {
                        label_str = "Player " + (index - 1).toString() + ": "
                    }
                }
                
                /* We need a unique key for each view, and we know each */
                /* position in the array is unique, so use that. */
                temp_obj.push(
                    <View key={item_index.toString() + index.toString()}>
                        <Text style={styles.text}>
                            {label_str}{display_obj[item_index][index]}
                        </Text>
                    </View>
                )
            }

            /* Add each view to our array of views */
            item_view.push(
                <View>
                    {temp_obj}
                </View>
            )
        }

        const renderItem = ({ item }) => (
            <View style={styles.teeTimeBox}>
                { item }
            </View>
        );
      
        return (
            <FlatList
              data={item_view}
              renderItem={renderItem}
            />
        );
      };

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

                <Text></Text>

                { display_obj.length > 0 ? (
                <View style={styles.flatList}>

                    <Text style={styles.boldtext}>Upcoming Tee Times</Text>
                    <TimeList display_obj={display_obj} />
                </View> ) : (<View></View>)
            }
            
            </ImageBackground>
        </View>
    );
}

export default Settings;