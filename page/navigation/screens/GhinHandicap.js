import * as React from 'react';
import { View, Text } from 'react-native';

export default function Menu({navigation}) {
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
                onPress= {() => navigation.navigate('Ghin Handicap')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Ghin Handicap</Text>
        </View>
    );
}