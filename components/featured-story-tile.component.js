import React from 'react'

import {SubTitle,Spaces,Row,FeaturedCover, FeaturedTile, Title} from '../utils/styled-components'

import featuredPhoto from '../assets/featuredPhoto.jpeg'
import { View } from 'react-native'

export const FeaturedStoryTile = () => {

    return(

       <FeaturedTile >
       <FeaturedCover
       source ={
        featuredPhoto
       }
      >
      <Spaces style = {{position:"absolute", bottom: 0}}>
      <Title style = {{color: "white", fontSize: 35}}>Story Title</Title>
      <Row >
      <View style ={{ flexDirection: "row",
      }}>
      <SubTitle style ={{color:"white",  }}>
      author
      </SubTitle>
      <SubTitle style ={{color:"white", position: "absolute",left: 250}}>
      learn more
      </SubTitle>
      </View>
      
      </Row>
      </Spaces>
     
      </FeaturedCover>
       </FeaturedTile>

    )
}