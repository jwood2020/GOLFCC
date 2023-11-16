import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function CheckLoggedIn() {
    console.log(firebase.app().auth().currentUser);
    return firebase.app().auth().currentUser;
}

export default CheckLoggedIn;