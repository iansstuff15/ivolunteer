import React from 'react'
import {} from '../../utils/styled-components'
import {ScrollView} from 'react-native'

import {EventPost} from '../../components/event-post'
import {WebinarTile} from '../../components/webinar-tile'

export const Webinars = () => (
    <ScrollView style ={{backgroundColor: "#86B3F8", flex: 1}}>
    <WebinarTile/>
    </ScrollView>

)