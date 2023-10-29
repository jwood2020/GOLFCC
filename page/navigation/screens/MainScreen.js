import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
            title="Click Me"
            onPress={() => alert('Button Clicked!')}
        />
    </View>
    );
};

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})