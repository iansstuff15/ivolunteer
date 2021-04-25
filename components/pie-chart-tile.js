import React from 'react'
import {Chart} from './pie-charts'
import {View, Dimensions} from 'react-native'

import {Spaces, SubTitle, Title} from '../utils/styled-components'


const widthDimension = Dimensions.get('window').width; 

export const ChartsTile = () => (
    <View style = {{borderRadius: 25, justifyContent: "center", alignContent:"center", width: widthDimension*.9, marginTop: 20, overflow:"hidden" }}>
   
    
    <Title style ={{marginLeft:20, marginTop: 10, fontSize: 30, marginBottom: 10}}>EXPENSE DISTRIBUTION</Title>

   
    <Chart style ={{alignSelf:"center",}}/>
    </View>
)