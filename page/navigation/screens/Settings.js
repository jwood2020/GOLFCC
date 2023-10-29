import * as React from 'react';
import { View, Text } from 'react-native';
import LogoutUser from '../../../firebase/LogoutUser';

export default function Settings({navigation}) {

    function handleLogout() {
        LogoutUser();
        navigation.navigate('Home');
    }

    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                onPress= {() => navigation.navigate('Settings')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Settings</Text>

            <Text 
                onPress= {() => handleLogout()}
                style={{ fontSize: 15 }}>Log Out</Text>
        </View>
    );
}