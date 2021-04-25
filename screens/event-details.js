import React from 'react'
import { Image, ScrollView, Text ,Dimensions} from 'react-native'

import {FeaturedSection} from '../sections/featured-section'
import {EventsSection} from '../sections/events-section'
import {CommunitySection} from '../sections/community-section'

import {SafeArea} from '../utils/safe-area.component'

import {HeaderComponent} from '../components/header.component'
import thumbnail1 from '../assets/thumbnail1.png'
import {Header,Icon} from '../utils/styled-components'

import {Gallery} from '../components/gallery'
import {EventDetailTile} from '../components/event-detail-tile.component'
import {EventAbout} from '../components/event-about'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import {PeopleYouKnow} from '../components/people-you-know-tab'
import {ShareButton} from '../components/share-button'
import { FontAwesome } from '@expo/vector-icons';



  
  
  


const widthDimension = Dimensions.get('window').width; 

export const EventDetails = () => (
    
    <ScrollView>

    
   
    <Image source = {thumbnail1} style = {{width: widthDimension, height: widthDimension*.65}}/>
    <EventDetailTile/>
    <PeopleYouKnow/>
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'About') {
            iconName = focused
              ? 'info-circle'
              : 'question-circle';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'photo' : 'image';
          }

          // You can return any component that you like here!
          
          return <FontAwesome name={iconName} size={20} color={color} />;
        },})}
    tabBarOptions={{
    showIcon:true,
      activeTintColor: "#3C81A8",
      inactiveTintColor: "gray",
      tabStyle: {backgroundColor:"black",}
    }}
    >
        <Tab.Screen name = "About" component = {EventAbout} />
       
        <Tab.Screen name = "Gallery" component ={Gallery} />
    </Tab.Navigator>
    <ShareButton style = {{flex:1}}/>
    </ScrollView>
)