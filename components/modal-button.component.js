import React, { useState } from 'react'
import {Text, Alert, Modal, StyleSheet,  Pressable, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {Button, Title} from '../utils/styled-components';

import { BlurView } from 'expo-blur';

export const ModalButtonComponent = () => {

  
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
     
        <Modal
          animationType="fade"
        
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        > 
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Title style={{fontSize: 30}}>REGISTRED</Title>
              <AntDesign name="checkcircle" size={100} color="black" style={{margin:20}} />
              <Pressable
                style={[styles.button, styles.buttonClose,]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>BACK</Text>
              </Pressable>
            </View>
          </View>
    
        </Modal>


        <Button style={{justifyContent:"center", width:100,height:25}}
        onPress={() => setModalVisible(true)}>
          <Title style={{alignSelf:"center"}}>VOLUTEER</Title>
        </Button>
       
      </View>
    );
  };


  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 200
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
      },
  });
  
