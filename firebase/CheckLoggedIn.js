/* firebase/CheckLoggedIn.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program returned the current user's authentication
   information. If the user's authentication record is null then the user is
   logged out otherwise the user is logged in.
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function CheckLoggedIn() {
    console.log(firebase.app().auth().currentUser);
    return firebase.app().auth().currentUser;
}

export default CheckLoggedIn;