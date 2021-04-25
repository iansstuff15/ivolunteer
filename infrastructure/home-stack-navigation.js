import React, { useState } from 'react'
import {Text, Alert, Modal, StyleSheet,  Pressable, View} from 'react-native'

import {Button,Title} from '../utils/styled-components'
import {ModalButtonComponent} from '../components/modal-button.component'

import { createStackNavigator } from '@react-navigation/stack';


import {Home} from '../screens/home'
import {EventDetails} from '../screens/event-details'
import {Community} from '../screens/community'

const Stack = createStackNavigator();




export const HomeStackNavigator = () => {



return(
<Stack.Navigator >
    

   

    <Stack.Screen 
    name ="Home"
    component ={Home}
    options={{headerShown:false}}
    />
    <Stack.Screen 
    name ="Event Details"
    component ={EventDetails}
    options = {{
        headerRight: ( ) => (
            <ModalButtonComponent/>
            
        ),
        title: "",
        headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
        }
        
    }}
    />
    <Stack.Screen 
    name ="Community"
    component ={Community}
    options = {{
        headerTintColor:'white',
        title: "",
        headerStyle:{
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            backgroundColor: "#000000"
        }}}
    />
</Stack.Navigator>

)}
