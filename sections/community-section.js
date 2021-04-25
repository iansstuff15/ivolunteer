import React from 'react'

import {LightBlueBackgound, HomeHeading, WhiteBackground, RenderHorizontalList, YellowBackground, Spaces} from '../utils/styled-components'

import {FeaturedStoryTile} from '../components/featured-story-tile.component.js'

import {CommunityTile} from '../components/community-tile.component'
import { Pressable, Dimensions } from 'react-native'

const widthDimension = Dimensions.get('window').width; 

export const CommunitySection = ({navigation}) => (

    <YellowBackground style = {{width: widthDimension, height: widthDimension*.80}}>
    <HomeHeading style = {{marginTop: 20, marginLeft:20}}>COMMUNITY</HomeHeading>
    
    <RenderHorizontalList
    horizontal={true}
    Spaces
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
        <Pressable onPress = {()=>navigation.navigate("Community")}>
        <Spaces>
        <CommunityTile/>
        </Spaces>
        </Pressable>
        
       
    
    )}
    keyExtractor={(item) => item.name}
  />

  
    </YellowBackground>

)