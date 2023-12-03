/* firebase/ReturnUserTeeTimes.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program reads the authentication information from the 
   user, reads the recent tee times records, and then returns which of those
   records were created by that user.
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';
import { ref, onValue, getDatabase } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';


function ReturnUserTeeTimes() {

    /* Read the unique identifier from the current user's authentication */
    const auth_uid = firebase.app().auth().currentUser.uid;

    /* db_data object used to store the database read */
    const [db_data, setdb_data] = useState({});

    const db = getDatabase();
    const data_ref = ref(db, "/TeeTimes");

    /* useEffect will prevent the onValue function from rerendering the */
    /* function, meaning it will only run once. Inside the useEffect we */
    /* will read the database information from the TeeTimes key. */
    useEffect(() => {
        return onValue(data_ref, querySnapShot => {
            let data = querySnapShot.val() || {};
            let dbItems = {...data};
            setdb_data(dbItems);
        });
    }, []);

    user_teeTimes = {}

    /* These four for loops loop through all of the players within each */
    /* tee time */
    for (id in db_data) {
        for (day in db_data[id]) {
            for (time in db_data[id][day]) {
                for (player in db_data[id][day][time]) {
                    if (db_data[id][day][time][player]['created_by'] === 
                        auth_uid) 
                    {

                        /* This if and the if below it fix an error caused */
                        /* by referencing an object that doesn't exist */
                        if (user_teeTimes[day] === undefined) {
                            user_teeTimes[day] = {};
                        }

                        if (user_teeTimes[day][time] === undefined) {
                            user_teeTimes[day][time] = {};
                        }

                        user_teeTimes[day][time] = db_data[id][day][time];
                    }
                }
            }
        }
    }

    return user_teeTimes;

}

export default ReturnUserTeeTimes;
