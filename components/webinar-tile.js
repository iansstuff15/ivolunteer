
import React from 'react'
import { Image, ScrollView, Text , Dimensions} from 'react-native'


import featuredPhoto from '../assets/featuredPhoto.jpeg'
import {Header,Icon,FeaturedCover,Spaces, Title,Button, SubTitle } from '../utils/styled-components'



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

  

export const WebinarTile = () => (
    
   

    
    <FeaturedCover
    source ={
     featuredPhoto
    }
    style ={{width: widthDimension*.9, alignSelf: "center", marginTop: 10, borderRadius:15, overflow: "hidden"}}
   >
   <Spaces style = {{flex: 1}}/>
   <Title style = {{color: "white", fontSize: 35, marginLeft: 20}}>WEBINAR NAME</Title>
    <SubTitle  style = {{color: "white", fontSize: 15, marginLeft: 20}}>MM DD YYYY 00:00 AM</SubTitle>
  
  
   <Button style={{height: 24, width: 58,margin: 20, justifyContent: "center", alignSelf: "flex-end",marginBottom: 20  }}>
     <Title
     style = {{ alignSelf: "center", color: "white", fontSize: 15}}
     >JOIN</Title>
   </Button>
  
   </FeaturedCover>
    

)

