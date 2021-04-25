import React from 'react'

import {Button} from '../utils/styled-components'
import { Ionicons } from '@expo/vector-icons';

export const Send = () => (
<Button style ={{height:40, width:40,justifyContent: "center", borderRadius: 50, margin:5}}>
<Ionicons name="send" size={24} color="black" style={{alignSelf:"center"}} />
</Button>
)