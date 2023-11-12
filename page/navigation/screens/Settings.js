import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import LogoutUser from '../../../firebase/LogoutUser';
import background from '../../../backgroundimage.jpeg';
import ReturnUser from '../../../firebase/ReturnUser';


export default function Settings({navigation}) {

    const user_info = ReturnUser();
    const user = user_info[0];
    const email = user_info[1];

    function handleLogout() {
        LogoutUser();
        navigation.navigate('Home');
    }

    return(
        <View style={styles.viewContainer}>
            
            <ImageBackground
              style={styles.backgroundContainer}
              imageStyle={styles.image}
              source={background}
            >
            <View style={styles.container}>
                <Text style={styles.headingText}>Fox Run Golf Club</Text>
                <View style={styles.rightAlignText}>
                    <Text style={styles.logoutText} onPress= {() => handleLogout()}>Log Out</Text> 
                </View>
                
            </View>

            <View style={styles.divider} />

            <Text style={styles.text}>{user.UserCurrent}</Text>
            <Text style={styles.text}>Email:</Text>
            
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewContainer: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingVertical: 50,
        backgroundColor: 'black',
    },
    image: { 
        opacity: .4 
    },
    logoutText: {
        color: 'white',
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
    text: {
        color: 'white',
        marginVertical: 5,
    }
})