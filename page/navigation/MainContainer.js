/* page/navigation/MainContainer.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file is the entry level file for all the pages that come
   after a user is logged in. 
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Screens */
import MainScreen from './screens/MainScreen';
import Menu from './screens/Menu';
import TeeTimes from './screens/TeeTimes';
import Settings from './screens/Settings';
import GhinHandicap from './screens/GhinHandicap'

/* Screen names */
const mainName = "Home";
const menuName = "Menu";
const teetimeNames = "Tee Times";
const settingsName = "Settings";
const ghinHandicapName = "Ghin";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={mainName}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "grey",
                tabBarInactiveTintColor: "black",
                tabBarLabelStyle: {
                    paddingBottom: 18,
                    fontSize: 12
                },

                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ],
            
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === mainName) {
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === ghinHandicapName) {
                        iconName = focused ? 'list' : 'list-outline';

                    } else if (rn === menuName) {
                        iconName = focused ? 'list' : 'list-outline';

                    } else if (rn === teetimeNames) {
                        iconName = focused ? 'list' : 'list-outline'; 

                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                },
            })}
        >

            <Tab.Screen name={teetimeNames} component={TeeTimes} />
            <Tab.Screen name={menuName} component={Menu} />
            <Tab.Screen name={mainName} component={MainScreen} />
            <Tab.Screen name={ghinHandicapName} component={GhinHandicap} />
            <Tab.Screen name={settingsName} component={Settings} />

        </Tab.Navigator>
    );
}

export default MainContainer;