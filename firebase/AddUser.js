
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { ref, push, getDatabase } from '@react-native-firebase/database';

/* We need to function to wait for the firebase code to execute so that 
   we can return whether or not it was successful. Therefore we have to 
   declare the function as asynchronous and then await for firebase to
   create the user. */
async function AddUser(email, password, courseCode, fullName) {

    /* Create the user's authentication record */
    const success = await firebase.app().auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);

            const db = getDatabase();

            /* Create the User record in the database. */
            var id = push(ref(db, "/Users"), {
                Name: fullName,
                Email: email,
            });

            /* Match the unique identifier of the user record
               to all of the User's /UserCourses records. */
            var key = id.key;

            /* Match the user to their default golf course */
            push(ref(db, "/UserCourses"), {
                userID: key,
                CourseCode: courseCode,
            });

            /* Return that firebase was successful */
            return 1;
        })

        .catch(error => {

            console.log(error);
            alert(error);

            /* Return that firebase errored */
            return 0;
        });

    return success;

}

export default AddUser;