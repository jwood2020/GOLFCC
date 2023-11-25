/* page/navigation/screens/BookTeeTime.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays the popup modal where the user enters in
   players for a tee time.
*/

import { React, useState } from 'react';
import { View, Text, Button, TextInput, } from 'react-native';
import Modal from 'react-native-modal';
import UpdateTeeTimes from '../../../firebase/UpdateTeeTimes';
import styles from './TabPagesStyling';

function BookTeeTime({route, navigation}) {

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

    return (
        <Modal isVisible={true} style={styles.modal} transparent={true}>
            <View>
            <Text>Fox Run Golf Club</Text>
            <Text>Date: {day} </Text>
            <Text>Time: {time.substring(0, time.length - 4)} </Text>
            <Text></Text>
            <Text>Players</Text>
            <Text></Text>

            <View>
                <Text>Player 1: </Text>
                <TextInput
                    placeholder="Enter Player Name"
                    onChangeText={(text) => setPlayer1(text)}
                /> 
            </View>

            <Text></Text>

            {Number(time.substring(time.length - 2, time.length - 1)) > 1 ? (
                <View>
                    <Text>Player 2: </Text>
                    <TextInput
                        placeholder="Enter Player Name"
                        onChangeText={(text) => setPlayer2(text)}
                    /> 
                </View> ) : (<View></View>)
            }

            <Text></Text>

            {Number(time.substring(time.length - 2, time.length - 1)) > 2 ? (
                <View>
                    <Text>Player 3: </Text>
                    <TextInput
                        placeholder="Enter Player Name"
                        onChangeText={(text) => setPlayer3(text)}
                    /> 
                </View> ) : (<View></View>)
            }

            <Text></Text>

            {Number(time.substring(time.length - 2, time.length - 1)) > 3 ? (
                <View>
                    <Text>Player 4: </Text>
                    <TextInput
                        placeholder="Enter Player Name"
                        onChangeText={(text) => setPlayer4(text)}
                    /> 
                </View> ) : (<View></View>)
            }

            <Text></Text>

            <Button onPress={bookTeeTime}
                    title={"Book Tee Time"}>
            </Button>
            <Button onPress={navigateBack}
                    title={"Close Window"}>
            </Button>
            </View>
        </Modal>
    );
}

export default BookTeeTime;