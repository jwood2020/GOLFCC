import * as React from 'react';
import { View, Text } from 'react-native';

export default function MainScreen({navigation}) {
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                onPress= {() => alert('This is MainScreen')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>MainScreen</Text>
        </View>
    );
}