import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function CheckLoggedIn() {
    return firebase.app().auth().currentUser;
}

export default CheckLoggedIn;