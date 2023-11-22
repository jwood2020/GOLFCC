/* page/HomeLoginSignupStyling.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file contains all the styling for the home, login, and
   signup pages. 
*/

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    root: { 
        flex: 1
    },

    container: {
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    heading: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'white',
        textShadowRadius: 5, 
        textShadowColor: 'black',
        marginBottom: 10,
    },

    text: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: 'white',
        textShadowRadius: 5, 
        textShadowColor: 'black',
    },

    quotetext: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: 'white',
        textShadowRadius: 5, 
        textShadowColor: 'black',
        marginBottom: 20,
    },

    image: { 
        opacity: .4 
    },

    button: {
        width: '80%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold', 
    },

    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        color: 'white',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    footertext: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: 'white',
        textShadowRadius: 5, 
        textShadowColor: 'black',
        marginBottom: 40,
    },
});

export default styles;