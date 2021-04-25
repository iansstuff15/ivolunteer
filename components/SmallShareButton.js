import React from 'react';
import { Share, View, Dimensions } from 'react-native';
import {Button, Title, Row} from '../utils/styled-components'

import { Entypo } from '@expo/vector-icons';

const widthDimension = Dimensions.get('window').width; 

export const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'This is a test share feature App is in development',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View >
      <Button onPress={onShare} style={{height: 40, width:widthDimension*.87, borderRadius: 5, justifyContent: "center", margin: 5}}>
        <Row style={{alignSelf:"center"}}>
           
            <Entypo name="share-alternative" size={24} color="black" />
        </Row>
    </Button>      
    </View>
  );
};