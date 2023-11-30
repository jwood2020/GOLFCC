/* page/navigation/screens/Settings.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays user information and lets the user log out.
*/

import React from 'react';
import { View, Text, ImageBackground, FlatList, Alert } from 'react-native';

import LogoutUser from '../../../firebase/LogoutUser';
import ReturnUser from '../../../firebase/ReturnUser';
import ReturnUserTeeTimes from '../../../firebase/ReturnUserTeeTimes';
import DeleteTeeTime from '../../../firebase/DeleteTeeTime';

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

    function deletePrompt(display_arr) {

        player_arr = [];

        /* Find the date and time as it is stored in the database */
        for (day in userTeeTimes) { 

            /* convertDate returns an array, our day will be at index 0 */
            /* the day in display_arr is at index 0 */
            if (display_arr[0] === convertDate([day])[0]) {
    
                for (time in userTeeTimes[day]) {

                    /* convertTime returns an array, our time will be at index 0 */
                    /* the time in display_arr is at index 1 */
                    if (display_arr[1] === convertTime([time])[0]) {
                        player_arr.push(day);
                        player_arr.push(time);
                    }
                }
            }
        }

        console.log("prompt to delete this entry:", player_arr);

        Alert.alert(
            'Cancel Tee Time',  
            'Are you sure you want to cancel this tee time?', 
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },

                {   
                    text: 'OK', 
                    onPress: () => DeleteTeeTime(player_arr)
                },
            ]
        );
    }

    /* When the user logs out, take them back to the main screen */
    function handleLogout() {
        LogoutUser();
        navigation.navigate('Main');
    }

    /* Object containing all the Tee Times data created by the user */
    const userTeeTimes = ReturnUserTeeTimes();

    /* Array containing all the days */
    let day_obj = [];

    /* Loop through all the times for that day */
    /* NOTE: This will be unsorted */
    for (day in userTeeTimes) {
        day_obj.push(day);
    }

    day_obj.sort();

    /* Array containing the data we will display to the user */
    /* Each element of the array will be a tee time entry */
    let display_obj = [];

    /* loop through all the days in the data */
    for (day_index in day_obj) {

        let day = day_obj[day_index];
        let times = [];

        /* YYYY-MM-DD date format */
        var today = new Date().toISOString().substring(0,10);

        if (new Date(today).getTime() <= new Date(day).getTime()) {

            /* Loop through all the times for that day */
            /* NOTE: This will be unsorted */
            for (time in userTeeTimes[day]) {
                times.push(time);
            }
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
            temp_obj.push(convertDate([day])[0]);
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
                let delete_button = '';

                /* The first piece of information is the date */
                if (Number(index) === 0) {
                    label_str = "Date: ";

                    /* YYYY-MM-DD date format */
                    /* Only allow users to delete tee times more than a */
                    /* day away */
                    var tomorrow = 
                        new Date(new Date().getTime()+(24*60*60*1000))
                        .toISOString().substring(0,10);

                    /* Find the day as it is stored in the database */
                    for (day in userTeeTimes) { 

                        if (display_obj[item_index][index] === 
                            convertDate([day])[0]) 
                        {
                            day_date = new Date(day).getTime();
                        }
                    }

                    /* We need to store this in a variable otherwise */
                    /* deletePrompt will try and use the last element of */
                    /* display_obj */
                    let which_arr = display_obj[item_index];

                    if (new Date(tomorrow).getTime() <= day_date) {
                        delete_button = 
                            <View>
                                <Text style={styles.text} 
                                    onPress= {() => deletePrompt(which_arr)}>
                                    X
                                </Text> 
                            </View>
                    }
                }

                else {
                    /* The second piece of information is the time */
                    if (Number(index) === 1) {
                        label_str = "Time: ";
                    }

                    /* The rest of the information is player information */
                    else {
                        label_str = "Player " + (index - 1).toString() + ": ";
                    }
                }
                
                /* We need a unique key for each view, and we know each */
                /* position in the array is unique, so use that. */
                temp_obj.push(
                    <View key={item_index.toString() + index.toString()} 
                          style={styles.container}
                    >
                        <Text style={styles.text}>
                            {label_str}{display_obj[item_index][index]}
                        </Text>
                        {delete_button}
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