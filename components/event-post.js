import React from 'react'
import {View, TextInput, Dimensions,ScrollView} from 'react-native'

import {EventTile} from '../components/event-tile.component'
import {ShareButton} from '../components/SmallShareButton'
import {Send} from './send-component'

import {Row} from '../utils/styled-components'

const widthDimension = Dimensions.get('window').width; 

export const EventPost = () => (
<>
<View style={{backgroundColor:"#000000", padding: 10, margin:10, alignSelf:"center", width:widthDimension*.95, borderRadius:10, justifyContent: "center", alignContent:"center"}}>
<EventTile style={{width:widthDimension*.95, alignSelf: "center"}}/>
<Row>
<TextInput
        placeholder="comments"
       multiline={true}
        style={{backgroundColor:"#FFFFFF", borderRadius:10,  justifyContent:"center", textAlign:"center",flex:1, margin:10}}
      />
<Send/>
</Row>
<ShareButton />
</View>


</>

)