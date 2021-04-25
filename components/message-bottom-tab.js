import React from 'react'
import {View, Dimensions, TextInput} from 'react-native'

import {Row,Spaces} from '../utils/styled-components'

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const widthDimension = Dimensions.get('window').width;

export const BottomTab = () => (

    <View style = {{width:widthDimension, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", padding: 20}}>
    <Row>
 
    <FontAwesome5 name="photo-video" size={24} color="black" style={{ borderRadius:10,  justifyContent:"center", textAlign:"center", marginRight: 10, }} />
    <Entypo name="folder" size={24} color="black" style={{ borderRadius:10,  justifyContent:"center", textAlign:"center", marginRight: 10, }}/>
 
    <SimpleLineIcons name="options" size={24} color="black" style={{ borderRadius:10,  justifyContent:"center", textAlign:"center", marginRight: 10, }}/>
    <TextInput
        placeholder="Aa"
       multiline={true}
        style={{backgroundColor:"#D6D3D3", borderRadius:10,  justifyContent:"center", textAlign:"center",flex:1, marginRight: 10, color: "#000000"}}
      />
      <Ionicons name="send" size={24} color="black" />
    </Row>
    </View>

)