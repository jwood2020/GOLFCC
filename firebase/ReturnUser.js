import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';
import { ref, get, getDatabase, once, forEach, push, database, onValue, } from '@react-native-firebase/database';
import { useState, useEffect } from 'react';

function ReturnUser() {
    const auth_uid = firebase.app().auth().currentUser.uid;
    const [db_data, setdb_data] = useState({});

    const db = getDatabase();

    var data_ref = ref(db, "/Users");

    useEffect(() => {
        return onValue(data_ref, querySnapShot => {
          let data = querySnapShot.val() || {};
          let dbItems = {...data};
          setdb_data(dbItems);
        });
    }, []);

    var user = '';
    var email = '';

    for (index in db_data) {

      if (db_data[index]['AuthID'] === auth_uid) {
        user = db_data[index]['Name'];
        email = db_data[index]['Email'];
      };
    }

    return [user, email];

}

export default ReturnUser;