import React from 'react'
import {Image} from 'react-native'

export const ProfilePic = ({pic,...otherProps}) =>{ 
    console.log()
    return(
    
    <Image source ={pic} style={otherProps.style}/>
)}