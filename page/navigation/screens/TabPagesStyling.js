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
        flex: 1,
    },

    container: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    mainContainer: {
        flex: 1,  
        paddingHorizontal: 20, 
        paddingVertical: 50,
        backgroundColor: 'black',
    },

    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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

    backgroundImage: { 
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
    },

    centeredText: {
        color: 'white',
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 15,
    },
    
    boldtext: {
        color: 'white',
        marginTop: 5,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },

    teeTimesButtonBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        padding: 1, 
        width: 30,
        marginLeft: 10,
        marginRight: 10,
    },

    buttonBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5, 
        padding: 1, 
        width: 30,
    },

    addToOrderButton: {
        borderWidth: 1, 
        borderColor: 'white',
        borderRadius: 5,
        padding: 1, 
        marginLeft: 'auto',
        color: 'white',
    },  

    flatList: {
        marginBottom: 150,

    },

    teeTimeBox: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10, 
        padding: 18, 
        marginBottom: 10,
    },

    view1: {
        padding: 10,
        margin: 5,
    },

    productHeading: {
        fontSize: 26,
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10,
    },

    subheading: {
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
    },

    image: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain', 
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
        marginTop: 3,
        paddingHorizontal: 10,
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
});

export default styles;