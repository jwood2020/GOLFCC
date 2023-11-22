/* firebase/CreateTeeTimes.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program reads the tee time information from the database
   and checks if any dates within the last two weeks are missing and creates
   those records if they are missing. 

   NOTE: This program has the same functionality as firebase/ReturnTeeTimes.js
   only this program instead waits for the read to the database and also writes
   to the database. Unfortunately, we cannot combine these two programs because 
   firebase/ReturnTeeTimes.js must return an object value and that cannot be
   done inside an async function.
*/

import { ref, get, push, getDatabase } from '@react-native-firebase/database';

/* We will have tee times available from 8 am to 5 pm 
   with 10 minute increments. We will display records 
   for 2 weeks, so records will be created two weeks in
   advanced and will not be visible to the user whenever 
   they are in the past. */

/* This means we will have 55 records for 1 day
   and 770 total records for the two weeks that will be 
   displayed */

/* This has to be an asynchronous function because we need the function
   to wait for the read statement to finish before deciding whether or
   not new records need to be created. Then, we do not want the program to
   keep running before a new record is finished being pushed to the database.
*/
async function CreateTeeTimes() {

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

    console.log("db_data", db_data);

    /* Loop through each day for two weeks */
    for (let i = 0; i < 14; i++) {

        /* Create a new date type for the ith day from today */
        var data_date = new Date(new Date().getTime()+(i*24*60*60*1000));

        /* YYYY-MM-DD date format */
        var data = data_date.toISOString().substring(0,10);

        /* boolean used to figure out if we need to add the record or not */
        var found = 0;

        /* Loop through all the unique identifiers */
        for (index in db_data) {

            /* Loop through the unique identifier's value */
            /* (one day - so this will only have one iteration) */
            for (day in db_data[index]) {

                /* If its the day we are looking for then its found */
                if (day === data) {
                    found = 1;
                };

            }
        }

        console.log(found);

        /* If we did not find the day then we need to push that day to the */
        /* database */
        if (found === 0) {

            await push(data_ref, {
                [data]: {
                    "08:00": "", "08:10": "", "08:20": "", 
                    "08:30": "", "08:40": "", "08:50": "",
                    "09:00": "", "09:10": "", "09:20": "",
                    "09:30": "", "09:40": "", "09:50": "",
                    "10:00": "", "10:10": "", "10:20": "",
                    "10:30": "", "10:40": "", "10:50": "",
                    "11:00": "", "11:10": "", "11:20": "",
                    "11:30": "", "11:40": "", "11:50": "",
                    "12:00": "", "12:10": "", "12:20": "",
                    "12:30": "", "12:40": "", "12:50": "",
                    "13:00": "", "13:10": "", "13:20": "",
                    "13:30": "", "13:40": "", "13:50": "",
                    "14:00": "", "14:10": "", "14:20": "",
                    "14:30": "", "14:40": "", "14:50": "",
                    "15:00": "", "15:10": "", "15:20": "",
                    "15:30": "", "15:40": "", "15:50": "",
                    "16:00": "", "16:10": "", "16:20": "",
                    "16:30": "", "16:40": "", "16:50": "",
                    "17:00": ""
                }
            });
        }
    }
}

export default CreateTeeTimes; 