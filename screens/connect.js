import React from 'react'
import { ScrollView, View } from 'react-native'

import { Title } from '../utils/styled-components'

import {PeopleTile} from '../components/people-tile'
export const Connect = () => (

    <ScrollView>
        <View style = {{margin:20}}>
        <Title style = {{fontSize: 60}}>PEOPLE</Title>
        <Title style = {{fontSize: 20}}>AROUND --LOCATION</Title>
        </View>
        <PeopleTile />
        <PeopleTile/>
        <PeopleTile/>
        <PeopleTile/>
        <PeopleTile/>
        
    </ScrollView>
    

)