import React from 'react'
import { View, Dimensions } from  'react-native'
import { Title,Row } from '../utils/styled-components'

import {ProfilePic} from '../components/profile-pic'

const widthDimension = Dimensions.get('window').width; 

export const ProfileHeader = () => (
    <View style ={{width: widthDimension}}>
    
    <Row>
    <ProfilePic pic = {require("../assets/profilePic/profile3.png")} style ={{width: 100, height:100, borderRadius: 100, marginRight: 20}}/>
    <View>
    <Title style ={{fontSize: 30}}>PROFILE NAME</Title>
    <Title>LOCATION</Title>

    <View>
    <Title style = {{fontSize: 15, marginTop:10}}>ACTIVITIES JOINED: 00</Title>
    <Title style = {{fontSize: 15}}>CONNECTIONS: 00</Title>
    </View>
    </View>
    
    </Row>
    
    
    </View>
)