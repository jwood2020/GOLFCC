
import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function LogoutUser() {
    firebase.app().auth().signOut();
}

export default LogoutUser;