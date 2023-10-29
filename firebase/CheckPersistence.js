import firebase from '@react-native-firebase/app';
import auth  from '@react-native-firebase/auth';

function CheckPersistence() {
    return firebase.auth().currentUser;
}

export default CheckPersistence;