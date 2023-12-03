/* page/navigation/screens/BookTeeTime.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays the popup modal where the user enters in
   players for a tee time.
*/

import { React, useState } from 'react';

import { View, 
         Text, 
         TouchableOpacity, 
         TextInput, 
         ImageBackground, 
         ScrollView, 
         KeyboardAvoidingView, } 
from 'react-native';

import UpdateTeeTimes from '../../../firebase/UpdateTeeTimes';
import background from '../../../backgroundimage.jpeg';
import styles from './TabPagesStyling';

function BookTeeTime({route, navigation}) {

    /* Gather parameters passed from the calling program (TeeTimes.js) */
    const { day, data_day, time, data_time } = route.params;

    function bookTeeTime() {
        UpdateTeeTimes(data_day,data_time,Player1,Player2,Player3,Player4);
        navigateBack();
    }

    function navigateBack() {
        navigation.goBack();
    }

    const [Player1, setPlayer1] = useState("");
    const [Player2, setPlayer2] = useState("");
    const [Player3, setPlayer3] = useState("");
    const [Player4, setPlayer4] = useState("");

    const num_players = time.substring(time.length - 2, time.length - 1);

    return (

        <View style={styles.root}>
            <ImageBackground
              style={styles.mainContainer}
              imageStyle={styles.backgroundImage}
              source={background}
            >
        
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <ScrollView styles={styles.root}>
             
                        <View style={styles.container}>

                            <Text style={styles.headingText}>
                                Book Tee Time
                            </Text>

                            <View style={styles.rightAlignText}>

                                <Text style={styles.logoutText} 
                                    onPress= {() => navigateBack()}>
                                    Close
                                </Text> 

                            </View>
                            
                        </View>
                        

                        <View style={styles.divider} />
                    
                        <Text style={styles.bodyText}>
                            Golf Course: Fox Run Golf Club 
                        </Text>
                        <Text style={styles.bodyText}>
                            Date: {day} 
                        </Text>
                        <Text style={styles.bodyText}>
                            Time: {time.substring(0, time.length - 4)} 
                        </Text>

                        <Text></Text>

                        <Text style={styles.bodyText}>
                            Players (Enter up to {num_players})
                        </Text>

                        <Text></Text>

                        <View>
                            <Text style={styles.bodyText}>Player 1: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Player Name"
                                placeholderTextColor={'white'}
                                onChangeText={(text) => setPlayer1(text)}
                            /> 
                        </View>

                        {Number(num_players) > 1 ? (
                            <View>
                                <Text style={styles.bodyText}>Player 2: </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Player Name"
                                    placeholderTextColor={'white'}
                                    onChangeText={(text) => setPlayer2(text)}
                                /> 
                            </View> ) : (<View></View>)
                        }

                        {Number(num_players) > 2 ? (
                            <View>
                                <Text style={styles.bodyText}>Player 3: </Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Enter Player Name"
                                    placeholderTextColor={'white'}
                                    onChangeText={(text) => setPlayer3(text)}
                                /> 
                            </View> ) : (<View></View>)
                        }

                        {Number(num_players) > 3 ? (
                            <View>
                                <Text style={styles.bodyText}>Player 4: </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Player Name"
                                    placeholderTextColor={'white'}
                                    onChangeText={(text) => setPlayer4(text)}
                                /> 
                            </View> ) : (<View></View>)
                        }

                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={bookTeeTime}
                        >
                            <Text style={styles.buttonText}>
                                Book Tee Time
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
        
    );
}

export default BookTeeTime;