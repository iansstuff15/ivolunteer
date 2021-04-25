import React from 'react'
import {Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import {SafeArea} from '../utils/safe-area.component'

import {HomeStackNavigator} from './home-stack-navigation'
import {Connect} from '../screens/connect'
import {Profile} from '../screens/profile'

import {Home} from '../screens/home'
import { FontAwesome,  } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TAB_ICON = {
  Home: "home",
  Connect: "group",
  User: "user",
}



const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <FontAwesome name={iconName} size={size} color={color} />
      ),
    };
  };
  
const Tab = createBottomTabNavigator();


export const TabNavigator = () => (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "#3C81A8",
      inactiveTintColor: "gray",
      tabStyle: {backgroundColor:"white"},
      
      style:{borderTopWidth: 0, 
        elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS 
    }}}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Connect" component={Connect} />
    <Tab.Screen name="User" component={Profile} />

  </Tab.Navigator>
  </NavigationContainer>
)