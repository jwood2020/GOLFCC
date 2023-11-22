/* firebase/LogoutUser.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program logs out the current user. 
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function LogoutUser() {
    firebase.app().auth().signOut();
}

export default LogoutUser;