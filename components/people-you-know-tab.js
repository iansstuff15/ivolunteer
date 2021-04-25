import React from "react"
import {Dimensions} from 'react-native'

import {ProfilePic} from './profile-pic'
import {DarkGrayBackground, Title,Spaces, Row} from '../utils/styled-components'



const widthDimension = Dimensions.get('window').width; 


export const PeopleYouKnow = () => (
<DarkGrayBackground style ={{width:widthDimension, height: widthDimension*.3}}>

<Title style ={{color:"white", marginBottom: 20}}>

PEOPLE YOU KNOW WHO'S PART OF THIS
</Title>

<Row>


<ProfilePic pic = {require('../assets/profilePic/profile1.png')} style = {{borderRadius: 100, width:50,height:50, marginRight: 10}}/>
<ProfilePic pic = {require('../assets/profilePic/profile2.png')} style = {{borderRadius: 100, width:50,height:50, marginRight: 10}}/>
<ProfilePic pic = {require('../assets/profilePic/profile3.png')} style = {{borderRadius: 100, width:50,height:50, marginRight: 10}}/>
<ProfilePic pic = {require('../assets/profilePic/profile4.png')} style = {{borderRadius: 100, width:50,height:50, marginRight: 10}}/>
<ProfilePic pic = {require('../assets/profilePic/profile5.png')} style = {{borderRadius: 100, width:50,height:50, marginRight: 10}}/>


</Row>

</DarkGrayBackground>
)