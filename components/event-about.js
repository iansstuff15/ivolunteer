import React from 'react'

import {View} from 'react-native'

import {FeaturedTile, FeaturedCover, Spaces,Title,SubTitle, Button, WhiteBackground, Paragraph} from '../utils/styled-components'
import {LoremIpsum} from './details.lorem-ipsum'

export const EventAbout = () => (
    <WhiteBackground style = {{overflow: "hidden", flex:1,}}>
    <LoremIpsum title = {'ABOUT'}/>
    <LoremIpsum title = {'MISSION'}/>
    <LoremIpsum  title = {'VISION'}/>
    </WhiteBackground>
)