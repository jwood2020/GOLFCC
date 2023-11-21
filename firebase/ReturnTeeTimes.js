import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { ref, onValue, getDatabase } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';

/* We will have tee times available from 8 am to 5 pm 
   with 10 minute increments. We will display records 
   for 2 weeks, so records will be created two weeks in
   advanced and will not be visible to the user whenever 
   they are in the past. */

/* This means we will have 55 records for 1 day
   and 770 total records for the two weeks that will be 
   displayed */

function ReturnTeeTimes() {

   const [db_data, setdb_data] = useState({});

   const db = getDatabase();
   const data_ref = ref(db, "/TeeTimes");

   useEffect(() => {
      return onValue(data_ref, querySnapShot => {
         let data = querySnapShot.val() || {};
         let dbItems = {...data};
         setdb_data(dbItems);
      });
   }, []);

   var teeTimes = {}

   for (let i = 0; i < 14; i++) {

      var data_date = new Date(new Date().getTime()+(i*24*60*60*1000));

      // YYYY-MM-DD date format
      var data = data_date.toISOString().substring(0,10);

      for (index in db_data) {

         for (day in db_data[index]) {

            if (day === data) {

               teeTimes[day] = db_data[index][day];
            };
         }
      }
   }

   console.log(teeTimes);

   return teeTimes;
}

export default ReturnTeeTimes; 