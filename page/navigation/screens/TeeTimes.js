import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Button, } from 'react-native';
import ReturnTeeTimes from '../../../firebase/ReturnTeeTimes';
import CreateTeeTimes from '../../../firebase/CreateTeeTimes';
import background from '../../../backgroundimage.jpeg';
import { useState, useEffect } from 'react';

// Everytime the app reloads, create tee time records that are not present.
CreateTeeTimes();

export default function TeeTimes({navigation}) {

    function handleIncrement() {
        if (day_offset < 13) {

            data_display = {[display_day_obj[day_offset + 1]]: [data[day_obj[day_offset + 1]]]};
            set_day_offset(day_offset + 1);
        }
      };
    
      // Decrement the quantity by 1 when the button is pressed.
      function handleDecrement() {
        if (day_offset > 0) {

            data_display = {[display_day_obj[day_offset - 1]]: [data[day_obj[day_offset - 1]]]};

            set_day_offset(day_offset - 1);
        }
      }

    const [day_offset, set_day_offset] = useState(0);

    const data = ReturnTeeTimes();

    const month_obj = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var day_obj = [];
    var display_day_obj = [];

    for (let i in data) {

        let year = i.substring(0,4)
        let month = month_obj[Number(i.substring(5,7)) - 1]
        let day = i.substring(8,10)
        let date_str = month + " " + day + ", " + year;

        day_obj.push(i);
        display_day_obj.push(date_str);
    };

    const data_display = {[display_day_obj[0]]: [data[day_obj[0]]]};

    let times = [];
    let times_formatted = [];

    if (Object.values(data_display)[0][0] !== undefined) {
        times = Object.keys(Object.values(data_display)[0][0]).sort();

        for (let i in times) {

            let new_str = '';

            if (times[i].substring(0,2) === "10" || times[i].substring(0,2) === "11") {
                new_str = times[i] + " AM";
            }

            if (Number(times[i].substring(0,2)) > 11) {

                new_str = times[i];

                if (Number(times[i].substring(0,2)) > 12) {
                    new_str = (Number(times[i].substring(0,2)) - 12).toString() + times[i].substring(2);
                }

                new_str = new_str + " PM";
            }

            if (times[i][0] === '0') {
                new_str = times[i].substring(1) + " AM";
            }

            times_formatted.push(new_str);

        }
    }

    const TimeList = ({ data_list }) => {
        const renderItem = ({ item }) => (
          <View>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      
        return (
            <FlatList style={styles.flatList}
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
              imageStyle={styles.image}
              source={background}
            >
            <View style={styles.container}>
                <Text style={styles.headingText}>Tee Times</Text>
            </View>

            <View style={styles.divider} />

            <View>
                {Object.keys(data_display).length > 0 &&
                Object.keys(data_display)[0] != "undefined" ? (
                    <View>
                        <Text style={styles.boldtext}>
                            {Object.keys(data_display)[0]}
                        </Text>
                        <View style={styles.container}>

                            <View style={styles.buttonBox}>
                                <Button color="white" onPress={handleDecrement} title='<' />
                            </View>

                            <TimeList data_list={times_formatted} />

                            <View style={styles.buttonBox}>
                                <Button color="white" onPress={handleIncrement} title='>' />
                            </View>
                        </View>
                    </View>

                ) : (
                <View style={styles.container}>

                    <View style={styles.buttonBox}>
                        <Button color="white" onPress={handleDecrement} title='<' />
                    </View>
                    <Text style={styles.boldtext}>No Tee Times Available</Text>
                    <View style={styles.buttonBox}>
                        <Button color="white" onPress={handleIncrement} title='>' />
                    </View>
                    
                </View>
                )}
            </View>
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
        textAlign: 'center',
    },
    boldtext: {
        color: 'white',
        marginVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        padding: 1, 
        width: 30,
    },
    flatList: {
        width: '50%',
        alignContent: 'center',
    },
})