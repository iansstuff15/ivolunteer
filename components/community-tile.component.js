import React from 'react'

import {View} from 'react-native'

import {FeaturedTile, FeaturedCover, Spaces,Title,SubTitle, Button} from '../utils/styled-components'

import featuredPhoto from '../assets/featuredPhoto.jpeg'

export const CommunityTile = () => (

    <FeaturedTile>
    <FeaturedCover
       source ={
        featuredPhoto
       }
      >
      <Spaces style = {{flex: 1}}/>
      <Title style = {{color: "white", fontSize: 35, marginLeft: 20}}>COMMUNITY NAME</Title>
     
     
     
      <Button style={{height: 25, width: 99,margin: 10, justifyContent: "center", alignSelf: "flex-end",marginBottom: 20  }}>
        <Title
        style = {{ alignSelf: "center", color: "white", fontSize: 15}}
        >SUBSCRIBE</Title>
      </Button>
     
      
     
      </FeaturedCover>
    
    </FeaturedTile>
)