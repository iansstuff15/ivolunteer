import React from 'react'

import getDirections from 'react-native-google-maps-directions'
import {Button, Title} from './styled-components' 
import { Component } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import {Row} from './styled-components'

export class GetDirection extends Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 14.591085,
        longitude: 121.0839 , 
      },
      destination: {
        latitude: 14.6255092,
        longitude: 121.061909,
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      
    }
 
    getDirections(data)
  }
 
  render() {
    return (
        <Button style = {{width: 106, height: 29, backgroundColor: "#6BE88C", justifyContent:"center"}} onPress={this.handleGetDirections}>
        <Row style ={{justifyContent:"center"}}>
        <Title style = {{fontSize: 20, alignSelf: "center"}}>venue</Title>
        <FontAwesome5 name="location-arrow" size={15} color="black" style={{alignSelf:"center", marginLeft:5}}/>
        </Row>
        </Button>
    );
  }
}