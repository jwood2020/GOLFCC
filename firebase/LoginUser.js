
import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';
import { ref, push, getDatabase } from '@react-native-firebase/database';

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

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            alert('Login failed. Please check your credentials.');

            return 0;
        });

    firebase.app().auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch((error) => {
            console.log(error);
            alert(error);
        });

    return success;

}

export default LoginUser;