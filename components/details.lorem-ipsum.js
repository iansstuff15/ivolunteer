import React from 'react'

import {View} from 'react-native'

import {FeaturedTile, FeaturedCover, Spaces,Title,SubTitle, Button, WhiteBackground, Paragraph} from '../utils/styled-components'

export const LoremIpsum = ({title}) => (
   <Spaces>
    <Title style ={{fontSize: 60}}>
    {title}
    </Title>
    <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim nunc eu ipsum facilisis, et ultricies ligula mattis.
     Donec pulvinar commodo mi, non varius felis ultricies vel. Donec facilisis rhoncus malesuada. Nam porta volutpat tincidunt.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tortor odio, venenatis eu odio ac, 
      feugiat volutpat nisi. Pellentesque fermentum sed nisl ut dapibus.
    </Paragraph>
    </Spaces>
)