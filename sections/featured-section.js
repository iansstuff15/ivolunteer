import React from 'react'
import{Dimensions, Pressable} from 'react-native'

import {FeaturedStoryTile} from '../components/featured-story-tile.component.js'

import {HomeHeading, WhiteBackground,} from '../utils/styled-components'

const widthDimension = Dimensions.get('window').width; 
const heightDimension = Dimensions.get('window').height;
import { Ionicons } from '@expo/vector-icons';

export const FeaturedSection = () => (

    <WhiteBackground style={{width:widthDimension, height: widthDimension*.75}}>
    <Pressable>
    <Ionicons name="notifications" size={24} color="black" style = {{alignSelf:"flex-end",marginRight:20}}/>
    </Pressable>
    <HomeHeading >
    FEATURED STORY
    </HomeHeading>

    

    <FeaturedStoryTile />
    </WhiteBackground>

)