import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {SafeArea} from './utils/safe-area.component'




import {Navigation}from './infrastructure/navigation-index'

import {TabNavigator} from './infrastructure/tab-navigation'


export default function App() {
  return (
    <SafeArea >
      <StatusBar style="auto" /> 
      <TabNavigator/>
      
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
