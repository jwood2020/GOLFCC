
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { ref, push, getDatabase } from '@react-native-firebase/database';

async function AddUser(email, password, courseCode, fullName) {

    const success = await firebase.app().auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            const db = getDatabase();

            var id = push(ref(db, "/Users"), {
                Name: fullName,
                Email: email,
            });

            var key = id.key;

            push(ref(db, "/UserCourses"), {
                userID: key,
                CourseCode: courseCode,
            });

            return 1;
        })

        .catch(error => {

            console.log(error);
            alert(error);

            return 0;
        });

    return success;

}

export default AddUser;