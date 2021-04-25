import React from 'react'

import {BlackBackground} from '../utils/styled-components'
import GridImageView from 'react-native-grid-image-viewer';

import image2 from '../assets/Gallery/image2.jpg'
import image3 from '../assets/Gallery/image3.jpeg'
import { FlatList,Image } from 'react-native';

import {EventAbout} from './event-about'

const DATA =[
    {name:1,
    image:  require('../assets/Gallery/image2.jpg')},
    {name:2,
    image:require('../assets/Gallery/image3.jpeg')},
    {name:3,
        image:require('../assets/Gallery/image3.jpeg')}]

export const Gallery = () => (
   <BlackBackground style = {{flex:1}}>
    <FlatList
    data={ DATA}
    numColumns ={3}
    renderItem={({item}) => 
        (
     <Image source = {item.image} style={{ height: 100,width: 100,margin: 5, flex: 1}}/>
    )}
    keyExtractor={(item) => item.name}

    
    />
    </BlackBackground>
)