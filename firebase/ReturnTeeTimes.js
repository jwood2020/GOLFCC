/* firebase/ReturnTeeTimes.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program reads the tee time information from the database
   and returns the results. 

   NOTE: This program has the same functionality as firebase/CreateTeeTimes.js
   only this program does not need to wait for the database read before
   continuing (as it does not have to write anything back to the database
   based on the data obtained from the read). Unfortunately, we cannot combine
   these two programs because this program must return an object value and that
   cannot be done inside an async function, which is used in 
   firebase/CreateTeeTimes.js.
*/

import { ref, onValue, getDatabase } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';

/* We will have tee times available from 8 am to 5 pm 
   with 10 minute increments. We will display records 
   for 1 week, so records will be created one week in
   advance and will not be visible to the user whenever 
   they are in the past. */

/* This means we will have 55 records for 1 day
   and 385 total records for the one week that will be 
   displayed */

function ReturnTeeTimes() {

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

   /* teeTimes object to store all the data for the one week we will display */
   var teeTimes = {}

   /* Loop through each day for one week */
   for (let i = 0; i < 7; i++) {

      /* Create a new date type for the ith day from today */
      var data_date = new Date(new Date().getTime()+(i*24*60*60*1000));

      /* YYYY-MM-DD date format */
      var data = data_date.toISOString().substring(0,10);

      /* Loop through all the unique identifiers */
      for (index in db_data) {

         /* Loop through the unique identifier's value */
         /* (one day - so this will only have one iteration) */
         for (day in db_data[index]) {

            /* If its the day we are looking for then add it to our object */
            if (day === data) {

               let day_obj = {}

               /* Loop through all the times during the day */
               for (time in db_data[index][day]) {

                  /* keep track of the number of available slots per time */
                  let num_players = 0;

                  /* Loop through each player */
                  for (player in db_data[index][day][time]) {
                     
                     /* If the entry is blank, then its available */
                     if (db_data[index][day][time][player] === "") {
                        num_players += 1;
                     }
                  }

                  day_obj[time] = num_players;
               }

               teeTimes[day] = day_obj;
            };
         }
      }
   }

   return teeTimes;
}

export default ReturnTeeTimes; 