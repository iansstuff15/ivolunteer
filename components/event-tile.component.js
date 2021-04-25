import React from 'react'
import {StyleSheet} from 'react-native'


import thumbnail1 from '../assets/thumbnail1.png'

import {Title, TileCover,Tile, SubTitle, Row, Paragraph, Spaces, Button} from '../utils/styled-components'

export const EventTile = ({width}) => {
    return(
        
        <Tile style = {{width: width}}>
        
        <TileCover
        source ={
            thumbnail1
        }
       />
       <Spaces>
        <Row>
        <Title style={{paddingRight:10}} >
        Event Tile
        </Title>
        <SubTitle>
        01 01 2001
        </SubTitle>
        </Row>

        <Row >
        <SubTitle style={{paddingRight:10}} >
        organizer
        </SubTitle>
        <SubTitle >
        venue
        </SubTitle>
        </Row>
        
        <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur vel orci ut semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur vel orci ut semper. 
        </Paragraph>
        <Button style={{alignSelf: "flex-end", justifyContent: "center"}}>
        <Title style ={{fontSize: 10, alignSelf: "center", color: "white"}}>
        VOLUNTEER
        </Title>
        </Button>
        </Spaces>
        </Tile>
     
        )
}

const styles = StyleSheet.create({
flex:{
    
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent:'flex-start',
}
})


