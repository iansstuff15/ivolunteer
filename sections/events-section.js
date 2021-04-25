import React from 'react'
import {Pressable, Dimensions} from 'react-native'

import {EventTile} from '../components/event-tile.component'


import {LightBlueBackgound, HomeHeading,  RenderHorizontalList} from '../utils/styled-components'

const widthDimension = Dimensions.get('window').width; 

export const EventsSection = ({navigation}) => (

    <LightBlueBackgound style = {{width:widthDimension, height: widthDimension*.90}}>
    <HomeHeading style = {{marginTop: 20, marginLeft:20}}>
    EVENTS YOU MIGHT LIKE
    </HomeHeading>
    <RenderHorizontalList
    horizontal = {true}
    data={ [{ name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },]}
    renderItem={() => (
      <Pressable onPress = {()=> navigation.navigate("Event Details")}>
      <EventTile width ={200}/>
      </Pressable>
       
    
    )}
    keyExtractor={(item) => item.name}
  />

</LightBlueBackgound>
)