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
      <Button onPress={onShare} style={{height: 100, width: widthDimension, borderRadius: 0, justifyContent: "center"}}>
        <Row style={{alignSelf:"center"}}>
            <Title style={{alignSelf:"center", fontSize: 30, marginRight:10}}>SHARE</Title>
            <Entypo name="share-alternative" size={24} color="black" />
        </Row>
    </Button>      
    </View>
  );
};