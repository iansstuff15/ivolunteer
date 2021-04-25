import React from 'react'
import { ScrollView, View,Pressable } from 'react-native'
import { Title, RenderHorizontalList,Spaces } from '../utils/styled-components'

import {Tag} from '../components/tag.component'
import {ProfileHeader} from '../components/profile-header'
import {CommunityTile} from '../components/community-tile.component'
import {EventTile} from '../components/event-tile.component'

export const Profile = ({navigation}) => (
    <ScrollView>
    <View style = {{backgroundColor:"white"}}>
        <View style ={{margin: 20}}>
        <ProfileHeader/>
        </View>
    </View>

    <View style = {{backgroundColor:"#B0D0E2"}}>
        <View style ={{margin: 20}}>
        <Title style={{fontSize: 40}}>SKILLS</Title>
        <RenderHorizontalList
    
    data={ [{ name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },]}
    
    numColumns ={4}

    style={{marginTop: 10, marginRight: 30}}
    renderItem={() => (
    
        <Tag />
       
    
    )}
    keyExtractor={(item) => item.name}
    
    />

        </View>
    </View>

    <View style = {{backgroundColor:"#FFC170"}}>
    <View style ={{margin: 20}}>
    <Title style={{fontSize: 40}}>SIGNED UP EVENTS</Title>
    <RenderHorizontalList
    horizontal = {true}
    data={ [{ name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },]}
    renderItem={() => (
      <Pressable onPress = {()=> navigation.navigate("Event Details")}>
      <EventTile width ={200}/>
      </Pressable>
       
    
    )}
    keyExtractor={(item) => item.name}
  />
    </View>
</View>

    <View style = {{backgroundColor:"#FBF0AB", flex:1}}>
        <View style ={{margin: 20}}>
        <Title style={{fontSize: 40}}>COMMUNITIES</Title>
        <RenderHorizontalList
        horizontal={true}
    data={ [{ name: 1 },
    { name: 2 },
    { name: 3 },
]}
    renderItem={() => (
        <Pressable onPress = {()=>navigation.navigate("Community")}>
        <Spaces>
        <CommunityTile/>
        </Spaces>
        </Pressable>
        
       
    
    )}
    keyExtractor={(item) => item.name}
  />

        </View>
    </View>
    </ScrollView>
)