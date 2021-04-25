import React from 'react'
import { Image, ScrollView, Text , Dimensions} from 'react-native'

import {FeaturedSection} from '../sections/featured-section'
import {EventsSection} from '../sections/events-section'
import {CommunitySection} from '../sections/community-section'

import {SafeArea} from '../utils/safe-area.component'

import {HeaderComponent} from '../components/header.component'
import featuredPhoto from '../assets/featuredPhoto.jpeg'
import {Header,Icon,FeaturedCover,Spaces, Title,Button } from '../utils/styled-components'

import {Gallery} from '../components/gallery'
import {EventDetailTile} from '../components/event-detail-tile.component'
import {EventAbout} from '../components/event-about'

import {CommunityTile} from '../components/community-tile.component'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import { FontAwesome,  } from '@expo/vector-icons';



const TAB_ICON = {
    About: "info-circle",
    
  }
  
const widthDimension = Dimensions.get('window').width; 
console.log(widthDimension)
  
  const createScreenOptions = ({ route }) => {
      const iconName = TAB_ICON[route.name];
      return {
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name={iconName} size={size} color={color} />
        ),
      };
    };

  

export const HeroTile = () => (
    
   

    
    <FeaturedCover
    source ={
     featuredPhoto
    }
    style ={{width: widthDimension}}
   >
   <Spaces style = {{flex: 1}}/>
   <Title style = {{color: "white", fontSize: 35, marginLeft: 20}}>COMMUNITY NAME</Title>
  
  
  
   <Button style={{height: 25, width: 99,margin: 10, justifyContent: "center", alignSelf: "flex-end",marginBottom: 20  }}>
     <Title
     style = {{ alignSelf: "center", color: "white", fontSize: 15}}
     >SUBSCRIBE</Title>
   </Button>
  
   </FeaturedCover>
    

)