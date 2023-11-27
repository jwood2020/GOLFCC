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

    const userTeeTimes = ReturnUserTeeTimes();

    let day_obj = [];
    let times = [];

    for (day in userTeeTimes) {
        day_obj.push(day);
        for (time in userTeeTimes[day]) {
            times.push(time);
        }
    }

    let display_day_obj = convertDate(day_obj);
    let times_formatted = convertTime(times);

    let display_obj = []
    let index1 = 0;
    let index2 = 0;

    for (day in userTeeTimes) {
        for (time in userTeeTimes[day]) {
            let temp_obj = [];
            temp_obj.push(display_day_obj[index1]);
            temp_obj.push(times_formatted[index2]);
            for (player in userTeeTimes[day][time]) {
                temp_obj.push(userTeeTimes[day][time][player]['player']);
            }
            display_obj.push(temp_obj);
            index2 += 1;
        }
        index1 += 1;
    }

    const TimeList = ({ data_list }) => {
        var item_view = [];

        for (item_index in data_list) {
            let temp_obj = [];
            for (index in data_list[item_index]){

                let label_str = '';

                if (Number(index) === 0) {
                    label_str = "Date: ";
                }

                else {
                    if (Number(index) === 1) {
                        label_str = "Time: ";
                    }

                    else {
                        label_str = "Player " + (index - 1).toString() + ": "
                    }
                }
                
                temp_obj.push(
                    <View key={item_index.toString() + index.toString()}>
                        <Text style={styles.text}>
                            {label_str}{data_list[item_index][index]}
                        </Text>
                    </View>
                )
            }
            console.log("item_index", item_index)
            item_view.push(
                <View key={"new key" + item_index.toString()}>
                    {temp_obj}
                </View>
            )
        }

        console.log("item_view", item_view);

        const renderItem = ({ item, index }) => (
            <View style={styles.teeTimeBox} key={index.toString()}>
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
                <View>

                    <Text style={styles.boldtext}>Upcoming Tee Times</Text>
                    <TimeList data_list={display_obj} />
                </View> ) : (<View></View>)
            }
            
            </ImageBackground>
        </View>
    );
}

export default Settings;