/* firebase/ReturnUser.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program reads the authentication information from the 
   user, reads the associated database record for the user, and then returns
   the useful information from that record.
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';
import { ref, getDatabase, onValue, } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';

function ReturnUser() {

    /* Read the unique identifier from the current user's authentication */
    const auth_uid = firebase.app().auth().currentUser.uid;

    const [db_data, setdb_data] = useState({});

    const db = getDatabase();

    var data_ref = ref(db, "/Users");

    /* useEffect will prevent the onValue function from rerendering the function, */
    /* meaning it will only run once. Inside the useEffect we will read the */
    /* database information from the Users key. */
    useEffect(() => {
        return onValue(data_ref, querySnapShot => {
          let data = querySnapShot.val() || {};
          let dbItems = {...data};
          setdb_data(dbItems);
        });
    }, []);

    var user = '';
    var email = '';

    /* This loop will iterate through all the unique identifiers for each */
    /* user record. */
    /* We do not know what the unique identifier is, so we cannot access */
    /* the value directly, hence the loop. */
    for (index in db_data) {

      if (db_data[index]['AuthID'] === auth_uid) {
        user = db_data[index]['Name'];
        email = db_data[index]['Email'];
      };
    }

    /* The useful information from the user record is the user and the email. */
    return [user, email];

}

export default ReturnUser;