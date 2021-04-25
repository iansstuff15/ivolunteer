import React from 'react'
import {Chart} from './growth-chart'
import {View, Dimensions} from 'react-native'

import {Spaces, SubTitle, Title} from '../utils/styled-components'


const widthDimension = Dimensions.get('window').width; 

export const GrowthTile = () => (
    <View style = {{ borderRadius: 25, justifyContent: "center", alignContent:"center", width: widthDimension*.9, marginTop: 20, overflow:"hidden" }}>
   
    
    <Title style ={{marginLeft: 20,  fontSize:30}}>COMMUNITY GROWTH</Title>
   
    <Chart style ={{alignSelf:"center"}}/>
    </View>
)