/* firebase/DeleteTeeTime.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program inputs names and a date and time. Then this
   program adds those names to the TeeTime database record for that date
   and time. 
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';
import { ref, get, update, getDatabase } from '@react-native-firebase/database';

/* This has to be an asynchronous function because we need the function
   to wait for the read statement to finish before trying to find the unique 
   identifier. 
*/
async function UpdateTeeTimes(player_arr) {

    /* Read the unique identifier from the current user's authentication */
    const auth_uid = firebase.app().auth().currentUser.uid;

    const data_day = player_arr[0];
    const data_time = player_arr[1];

    /* db_data object used to store the database read snapshot */
    var db_data = {};

    const db = await getDatabase();
    const data_ref = await ref(db, "/TeeTimes");

    /* Read the data once from the database */
    await get(data_ref)
        .then((querySnapShot) => {
            let data = querySnapShot.val() || {};
            let dbItems = {...data};
            db_data = dbItems;
        });

    day_obj = {};
    unique_id = "";

    /* Loop through all the unique identifiers */
    for (index in db_data) {

        /* Loop through the unique identifier's value */
        /* (one day - so this will only have one iteration) */
        for (day in db_data[index]) {

            /* If its the day we are looking for then its found */
            if (day === data_day) {
                unique_id = index;
                day_obj = db_data[index][day];
            };

        }
    }

    let update_obj = {};

    /* Loop through all the times and find the right one */
    for (time in day_obj) {
        if (time === data_time) {
            update_obj = day_obj[time];
        }
    }

    for (player in update_obj) {

        /* Erase the records created by this user */
        if (update_obj[player]['created_by'] === auth_uid) {
            update_obj[player] = "";
        }

    }

    /* Build the reference to the database that we need to update */
    let child_path = unique_id + "/" + data_day + "/" + data_time;
    let child_ref = data_ref.child(child_path);

    await update(child_ref, update_obj);

    console.log("updating ", data_time, " on ", data_day, " to ", update_obj);
    
}

export default UpdateTeeTimes; 