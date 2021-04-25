import React from 'react'
import { Image, ScrollView, Text , Dimensions} from 'react-native'



import {Gallery} from '../components/gallery'

import {EventAbout} from '../components/event-about'
import { MaterialIcons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import { FontAwesome,  } from '@expo/vector-icons';



import {PeopleYouKnow} from '../components/people-you-know-tab'
import {ShareButton} from '../components/share-button'
import {HeroTile} from '../components/hero-tile'

import {Forums} from './community-stacks/forums'
import {Events} from './community-stacks/events'
import {Webinars} from './community-stacks/webinars'
import {Documentations} from './community-stacks/documentations'

export const Community = () => (
    
    <>
    <HeroTile/>
  
    <Tab.Navigator
   
    tabBarOptions={{
    showIcon:true,
      activeTintColor: "#3C81A8",
      inactiveTintColor: "gray",
      tabStyle: {backgroundColor:"black",  }
    }}
    >
        <Tab.Screen name = "POST" component = {Events} />
       
        <Tab.Screen name = "FORUMS" component ={Forums} />
        <Tab.Screen name = "WEBINARS" component ={Webinars} />
        <Tab.Screen name = "ABOUT" component ={Documentations} />  
    </Tab.Navigator>
  </>
)