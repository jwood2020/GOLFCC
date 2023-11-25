/* page/navigation/screens/BookTeeTime.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file displays the popup modal where the user enters in
   players for a tee time.
*/

import { React, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, } from 'react-native';
import Modal from 'react-native-modal';

function BookTeeTime({route, navigation}) {

    const { day, data_day, time, data_time } = route.params;

    function bookTeeTime() {
        UpdateTeeTimes(Player1,Player2,Player3,Player4);
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
        textAlign: 'center',
    },
    boldtext: {
        color: 'white',
        marginTop: 5,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    buttonBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        padding: 1, 
        width: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    flatList: {
        marginBottom: 120,

    },
    teeTimeBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        padding: 12, 
    },
    modal: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingVertical: 50,
        backgroundColor: 'white',
    }
})

export default BookTeeTime;