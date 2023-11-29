/* page/navigation/screens/TeeTimes.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays the tee times to the user and lets
   them signup for a tee time.
*/

import { React, useState } from 'react';

import { View, 
         Text, 
         ImageBackground, 
         FlatList, 
         TouchableOpacity } 
from 'react-native';

import ReturnTeeTimes from '../../../firebase/ReturnTeeTimes';
import CreateTeeTimes from '../../../firebase/CreateTeeTimes';
import convertTime from './dates_and_times/convertTime';
import convertDate from './dates_and_times/convertDate';
import background from '../../../backgroundimage.jpeg';
import styles from './TabPagesStyling';

/* Everytime the app reloads, create tee time records that are not present. */
CreateTeeTimes();

function TeeTimes({navigation}) {

    function showPopup(time, data_time) {
        navigation.navigate("BookTeeTime", {
            day: display_day_obj[day_offset], 
            data_day: day_obj[day_offset], 
            time: time,
            data_time: data_time});
    }

    /* Increment the quantity by 1 when the button is pressed. */
    function handleIncrement() {
        if (day_offset < 6) {
            set_day_offset(day_offset + 1);
        }
    };
    
    /* Decrement the quantity by 1 when the button is pressed. */
    function handleDecrement() {
        if (day_offset > 0) {
            set_day_offset(day_offset - 1);
        }
    };

    const [day_offset, set_day_offset] = useState(0);

    const data = ReturnTeeTimes();

    /* day_obj will store the day as it looks in the database. 
       display_day_obj will store the day as it appears to the user.
       The two corresponding days will be at the same indices so we 
       will be able to map between each. */
    var day_obj = [];
    var display_day_obj = [];

    /* Create list of days */
    for (let i in data) {
        day_obj.push(i);
    };

    display_day_obj = convertDate(day_obj);

    /* Every time we increment/decrement the day offset, the function is 
       rerendered and this variable is redeclared. Therefore we will always
       declare it to be the data at whatever day_offset is. */
    var data_display = {[display_day_obj[day_offset]]: 
                        data[day_obj[day_offset]]};

    /* Similiar to how day_obj and display_day_obj work, times will be the 
       time as it appears in the database and times_formatted will be the time
       as it appears to the user with both corresponding times at the same 
       index. */
    let times = [];
    let times_formatted = [];

    /* While the function is still waiting for ReturnTeeTimes to complete,
       it will continue with data as empty and therefore data_display will be 
       undefined. The .sort() line of code will error if we try to find the 
       keys of an object that is undefined. For some reason Object.values 
       returns what we want inside an array, which is why we reference it
       at [0]. */
    if (Object.values(data_display)[0] !== undefined) {
        let temp_times = Object.keys(Object.values(data_display)[0]).sort();

        /* Next we will convert each time to a form more readable to the 
           user. */
        let temp_times_formatted = convertTime(temp_times);
        let key = display_day_obj[day_offset];

        for (let i in temp_times) {

            let num_players = data_display[key][temp_times[i]];

            /* Only display tee times that are available */
            if (num_players !== 0) {

                /* Display the number of available spots to the user */
                times_formatted.push(temp_times_formatted[i] 
                    + " (" + num_players + ")");
                
                /* Also add the corresponding database time at the same */
                /* index as the corresponding time displayed to the user */
                times.push(temp_times[i]);
            }
        }
    }

    

    const TimeList = ({ data_list }) => {
        const renderItem = ({ item, index }) => (
          <View style={styles.teeTimeBox}>

            <TouchableOpacity onPress={() => showPopup(item, times[index])}>
                <Text style={styles.centeredText}>{item}</Text>
            </TouchableOpacity>

          </View>
        );
      
        return (
            <FlatList
              data={data_list}
              renderItem={renderItem}
              keyExtractor={(item) => item}
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
                <Text style={styles.headingText}>Tee Times</Text>
            </View>

            <View style={styles.divider} />

            <View>
                {Object.keys(data_display).length > 0 &&
                Object.keys(data_display)[0] != "undefined" ? (
                    <View style={styles.flatList}>
                        <View style={styles.container}>

                            <TouchableOpacity style={styles.teeTimesButtonBox} 
                                                onPress={handleDecrement}>
                                <Text style={styles.centeredText}>{'<'}</Text>
                             </TouchableOpacity>

                            <Text style={styles.boldtext}>
                                {Object.keys(data_display)[0]}
                            </Text>

                            <TouchableOpacity style={styles.teeTimesButtonBox} 
                                                onPress={handleIncrement}>
                                <Text style={styles.centeredText}>{'>'}</Text>
                            </TouchableOpacity>
                        </View>

                        <View><Text></Text></View>

                        <View style={styles.container}>
                            <TimeList data_list={times_formatted} />
                        </View>
                    </View>

                ) : (
                <View style={styles.container}>

                    <TouchableOpacity style={styles.teeTimesButtonBox} 
                                      onPress={handleDecrement}>

                        <Text style={styles.centeredText}>{'<'}</Text>
                    </TouchableOpacity>

                    <Text style={styles.boldtext}>No Tee Times Available</Text>

                    <TouchableOpacity style={styles.teeTimesButtonBox} 
                                      onPress={handleIncrement}>
                                        
                        <Text style={styles.centeredText}>{'>'}</Text>
                    </TouchableOpacity>
                    
                </View>
                )}
            </View>
            </ImageBackground>
        </View>
    );
}

export default TeeTimes;