import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import background from '../../../backgroundimage.jpeg';

const MainScreen = ({navigation}) => {
    return(
        <View style={styles.viewContainer}>

            <ImageBackground
              style={styles.container}
              imageStyle={styles.image}
              source={background}
            >
            <View>
                <Text style={styles.headingText}>Fox Run Golf Club</Text>

                <View style={styles.divider} />

                <Text style={styles.bodyText}>Fox Run Golf Club located in Council Bluffs, IA offers some of the finest and most well-maintained playing conditions in the Metro Area.</Text>
            </View>
            
        </ImageBackground>
    </View>
    );
};

export default MainScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    viewContainer: {
        flex: 1,
    },
    container: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingVertical: 50,
        backgroundColor: 'black',
    },
    image: { 
        opacity: .4 
    },
    headingText: {
        fontSize: 26,
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    bodyText: {
        color: 'white',
        paddingLeft: 10,
        paddingTop: 10
    },
    divider: {
        borderBottomWidth: 1,
        borderColor: 'gray', 
        marginVertical: 10,
      },
})