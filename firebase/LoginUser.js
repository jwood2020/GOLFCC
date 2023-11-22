/* firebase/LoginUser.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This program inputs an email and password and logs in the user
   if the information matches a current user or alerts the user if it does not.
   Returns whether the log in was successful.
*/

import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

/* We need to function to wait for the firebase code to execute so that 
   we can return whether or not it was successful. Therefore we have to 
   declare the function as asynchronous and then await for firebase to
   create the user. */
async function LoginUser(email, password) {

    const success = await firebase.app().auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            // Signed in
            const user = userCredential.user;
            console.log(user);

            return 1;
        })
        .catch((error) => {

            // Not Signed in

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            alert('Login failed. Please check your credentials.');

            return 0;
        });

    return success;

}

export default LoginUser;