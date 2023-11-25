/* page/navigation/screens/TeeTimes.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays the tee times to the user and lets
   them signup for a tee time.
*/

import { React, useState } from 'react';
import { View, Text, ImageBackground, FlatList, Button, } from 'react-native';

import ReturnTeeTimes from '../../../firebase/ReturnTeeTimes';
import CreateTeeTimes from '../../../firebase/CreateTeeTimes';
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
        if (day_offset < 13) {
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

    const month_obj = ['January','February','March','April','May',
                       'June','July','August','September','October',
                       'November','December'];

    /* day_obj will store the day as it looks in the database. 
       display_day_obj will store the day as it appears to the user.
       The two corresponding days will be at the same indices so we 
       will be able to map between each. */
    var day_obj = [];
    var display_day_obj = [];

    /* Loop through all the days inside of data and convert them from 
       YYYY-MM-DD into Month DD, YYYY. For example, 2023-12-05 is converted
       into December 05, 2023. */
    for (let i in data) {

        /* The first four characters make up the year (indices 0,1,2 and 3).
           Indices 5 and 6 make up the month and indices 8 and 9 make up the
           day. Then we use the month_obj array to map that month number to
           the month in words. */
        let year = i.substring(0,4);
        let month = month_obj[Number(i.substring(5,7)) - 1];
        let day = i.substring(8,10);
        let date_str = month + " " + day + ", " + year;

        day_obj.push(i);
        display_day_obj.push(date_str);
    };

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
        times = Object.keys(Object.values(data_display)[0]).sort();

        /* Next we will convert each time to a form more readable to the 
           user. */
        for (let i in times) {

            let new_str = '';
            let key = display_day_obj[day_offset];
            let num_players = data_display[key][times[i]];

            /* 10 and 11 will need an AM and won't need to trim off a 
               leading 0. */
            if (times[i].substring(0,2) === "10" || 
                times[i].substring(0,2) === "11") {
                new_str = times[i] + " AM (" + num_players + ")";
            }

            /* Every number greater than 11 is PM. */
            if (Number(times[i].substring(0,2)) > 11) {

                new_str = times[i];

                /* If the number is greater than 12 then we need to subtract 
                   12 from that number (for example, 13:20 becomes 1:20 PM) */
                if (Number(times[i].substring(0,2)) > 12) {
                    new_str = (Number(times[i].substring(0,2)) - 12).toString()
                               + times[i].substring(2);
                }

                new_str = new_str + " PM (" + num_players + ")";
            }

            if (times[i][0] === '0') {
                new_str = times[i].substring(1) + " AM (" + num_players + ")";
            }

            if (num_players !== 0) {
                times_formatted.push(new_str);
            }

        }
    }

    const TimeList = ({ data_list }) => {
        const renderItem = ({ item, index }) => (
          <View style={styles.teeTimeBox}>
            <Button
                  color="white" 
                  onPress={() => showPopup(item, times[index])} 
                  title={item}/>
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
                        <Text style={styles.boldtext}>
                            {Object.keys(data_display)[0]}
                        </Text>
                        <View style={styles.container}>

                            <View style={styles.teeTimesButtonBox}>
                                <Button color="white" 
                                        onPress={handleDecrement} 
                                        title='<' 
                                />
                            </View>

                            <TimeList data_list={times_formatted} />

                            <View style={styles.teeTimesButtonBox}>
                                <Button color="white" 
                                        onPress={handleIncrement} 
                                        title='>' 
                                />
                            </View>
                        </View>
                    </View>

                ) : (
                <View style={styles.container}>

                    <View style={styles.teeTimesButtonBox}>
                        <Button color="white" 
                                onPress={handleDecrement} 
                                title='<' 
                        />
                    </View>
                    <Text style={styles.boldtext}>No Tee Times Available</Text>
                    <View style={styles.teeTimesButtonBox}>
                        <Button color="white" 
                                onPress={handleIncrement} 
                                title='>' 
                        />
                    </View>
                    
                </View>
                )}
            </View>
            </ImageBackground>
        </View>
    );
}

export default TeeTimes;