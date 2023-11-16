import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { ref, onValue, push, getDatabase } from '@react-native-firebase/database';
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
      // var data = data_date.getFullYear().toString() + data_date.getMonth().toString() + data_date.getDate().toString();

      // YYYY-MM-DD date format
      var data = data_date.toISOString().substring(0,10);
      var found = 0;

      for (index in db_data) {

         for (day in db_data[index]) {

            if (day === data) {

               teeTimes[day] = db_data[index][day];
               found = 1;
             };

         }
      }

      console.log(found);

      if (found === 0) {
         push(data_ref, {
            [data]: {
            "08:00": "",
            "08:10": "",
            "08:20": "",
            "08:30": "",
            "08:40": "",
            "08:50": "",
            "09:00": "",
            "09:10": "",
            "09:20": "",
            "09:30": "",
            "09:40": "",
            "09:50": "",
            "10:00": "",
            "10:10": "",
            "10:20": "",
            "10:30": "",
            "10:40": "",
            "10:50": "",
            "11:00": "",
            "11:10": "",
            "11:20": "",
            "11:30": "",
            "11:40": "",
            "11:50": "",
            "12:00": "",
            "12:10": "",
            "12:20": "",
            "12:30": "",
            "12:40": "",
            "12:50": "",
            "13:00": "",
            "13:10": "",
            "13:20": "",
            "13:30": "",
            "13:40": "",
            "13:50": "",
            "14:00": "",
            "14:10": "",
            "14:20": "",
            "14:30": "",
            "14:40": "",
            "14:50": "",
            "15:00": "",
            "15:10": "",
            "15:20": "",
            "15:30": "",
            "15:40": "",
            "15:50": "",
            "16:00": "",
            "16:10": "",
            "16:20": "",
            "16:30": "",
            "16:40": "",
            "16:50": "",
            "17:00": ""}
        });
      }
   }

   return teeTimes;

}

export default ReturnTeeTimes; 