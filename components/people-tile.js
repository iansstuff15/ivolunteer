import React from 'react'
import { View, Dimensions } from 'react-native'
import{ProfilePic} from './profile-pic'
import { Title , Row, Button,RenderHorizontalList} from '../utils/styled-components'
import {Tag} from './tag.component'

const widthDimension = Dimensions.get('window').width; 

export const PeopleTile = () => (
    <View style ={{backgroundColor: "white", borderRadius: 20, padding: 20, width: widthDimension*.9, alignSelf: "center", overflow:"hidden", marginBottom:20}}>
    <Row>
    <ProfilePic pic = {require("../assets/profilePic/profile5.png")} style = {{height: 40, width: 40, borderRadius: 50, marginRight: 20}}/>
    <View>
    <Title>PROFILE NAME</Title>
    <Title style ={{fontSize: 15}}>LOCATION</Title>
   
    <Title style ={{fontSize: 10, marginTop:10}}>SIMILAR INTEREST</Title>
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
    style={{marginTop: 10, marginRight: 30, height:30.2}}
    renderItem={() => (
    
        <Tag />
       
    
    )}
    keyExtractor={(item) => item.name}
    />

    </View>
    </Row>
    <Button style ={{alignSelf: "flex-end", width: 100, height: 30, justifyContent: "center"}}>
    <Title style ={{alignSelf:"center"}}>CONNECT</Title>
    </Button>
   
    </View>
)