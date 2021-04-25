import React from 'react'
import {} from '../../utils/styled-components'
import {ScrollView} from 'react-native'

import {EventPost} from '../../components/event-post'

export const Events = () => (
    <ScrollView style ={{backgroundColor: "#FBF0AB", flex: 1}}>
    <EventPost/>
    </ScrollView>

)