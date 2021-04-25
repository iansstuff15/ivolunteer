import React from 'react'
import {Dimensions, View} from 'react-native'

import {WhiteBackground, Title, SubTitle, Row, Button,Spaces, RenderHorizontalList} from '../utils/styled-components'
import { Entypo } from '@expo/vector-icons';

import {Tag} from './tag.component'
import {ProgressBarComponent} from './progressbar.component'
import {GetDirection} from '../utils/google-maps-get-directions'

import Reminders from "@wiicamp/react-native-reminders";

const widthDimension = Dimensions.get('window').width; 



 





export const EventDetailTile = () => (
    <WhiteBackground style = {{width:widthDimension, height:widthDimension*.80, paddingBottom: 20, backgroundColor: "#F3F3F3"}}>
    <Spaces style ={{alignSelf: "center"}}>
    <Title style = {{fontSize: 34}}>EVENT TITLE</Title>
    <SubTitle style = {{fontSize: 20}}>organizer_name</SubTitle>
    </Spaces>
    
   
    <Row style={{display:"flex"}}>
    < View style={{flex:1}}>
    <GetDirection/>
    </View>
    < View style={{paddingRight: 20}}>
    <Button style = {{width: 135, height: 29, backgroundColor: "#4ADBF9", justifyContent:"center", position: "relative"}} >
    <Row style ={{justifyContent:"center"}}>
    <Title style = {{fontSize: 20, alignSelf: "center"}}>01/01/2001</Title>
    <Entypo name="calendar" size={15} color="black" style={{alignSelf:"center", marginLeft:5}}/>
    </Row>
    </Button>
    </View>
    </Row>
   
    <Spaces >
    <Spaces style={{paddingRight:20}}>
    <ProgressBarComponent color = "#F6EA61" text = "volunteers needed: 0" />
    
    </Spaces>
    <Spaces style={{paddingRight:20}}> 
    <ProgressBarComponent color = "#33840C" text = "funds raised: 000.00 Php." />
    </Spaces>
    </Spaces>
    <Spaces>
    <Button style = {{width: 106, height: 29, backgroundColor: "#33840C",  justifyContent: "center"}}>
    <Title style = {{fontSize: 20, alignSelf: "center", color: "white"}}>DONATE</Title>
    </Button>
    </Spaces>
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
    
        <Tag/>
       
    
    )}
    keyExtractor={(item) => item.name}
    />
    
    </WhiteBackground>
    
)