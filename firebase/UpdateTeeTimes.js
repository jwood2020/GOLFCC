/* firebase/UpdateTeeTimes.js
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
async function UpdateTeeTimes(data_day,data_time,Player1,Player2,Player3,Player4) {

    /* Read the unique identifier from the current user's authentication */
    const auth_uid = firebase.app().auth().currentUser.uid;

    /* db_data object used to store the database read snapshot */
    var db_data = {}

    const db = await getDatabase();
    const data_ref = await ref(db, "/TeeTimes");

    /* Read the data once from the database */
    await get(data_ref)
        .then((querySnapShot) => {
            let data = querySnapShot.val() || {};
            let dbItems = {...data};
            db_data = dbItems;
        });

    day_obj = {}
    unique_id = ""

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

    /* Loop through all the times and find the right one */
    for (time in day_obj) {
        if (time === data_time) {
            update_obj = day_obj[time];
        }
    }

    /* Force the entries to always be on the left side */
    const player_arr = [Player1,Player2,Player3,Player4].sort().reverse();
    var num_players_param = 0;

    /* Find out how many players the user wants to add */
    for (index in player_arr) {
        if (player_arr[index] !== "") {
            num_players_param += 1;
        }
    }

    var num_empty_data = 0;

    /* Find out how many spots are available */
    for (player in update_obj) {
        if (update_obj[player] === "") {
            num_empty_data += 1;
        }
    }

    /* Do not let the user add more spots than are available */
    /* This can only happen if there is a race condition and one user */
    /* tries to add after the database record has already been updated */
    if (num_players_param <= num_empty_data) {

        var array_index = 0;
        
        /* Add the players to our update object */
        /* Start adding users at the first empty position available in the */
        /* update object. */
        for (player in update_obj) {
            if (update_obj[player] === "" && player_arr[array_index] !== "") {
                update_obj[player] = {created_by: auth_uid,
                                      player: player_arr[array_index]};

                array_index += 1;
            }
        }

        /* Build the reference to the database that we need to update */
        let child_path = unique_id + "/" + data_day + "/" + data_time;
        let child_ref = data_ref.child(child_path);

        await update(child_ref, update_obj);

        console.log("updating ", data_time, " on ", data_day, " to ", update_obj);
    }

    else {
        alert("Cannot make tee time, please refresh the page");
    };
}

export default UpdateTeeTimes; 