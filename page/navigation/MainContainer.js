import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
import MainScreen from './screens/MainScreen';
import Menu from './screens/Menu';
import TeeTimes from './screens/TeeTimes';
import Settings from './screens/Settings';
import GhinHandicap from './screens/GhinHandicap'

//Screen names
const mainName = "Main";
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
        tabBarOptions ={{
          activeTintColor: 'grey',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 18, fontSize: 12 },
        }}
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