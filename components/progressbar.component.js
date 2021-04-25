import React from 'react'
import { View } from 'react-native'
import {ProgressBar, Colors} from 'react-native-paper'

import {Title, TileCover,Tile, SubTitle, Row, Paragraph, Spaces, Button} from '../utils/styled-components'

export const ProgressBarComponent = ({color,text}) => (
    <View>
    <ProgressBar progress={0.5} color={color} />
    <SubTitle>{text}</SubTitle>
    </View>
)