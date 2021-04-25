import React from 'react'
import {View,ScrollView} from 'react-native'
import {Gallery} from '../../components/gallery'

import {Title} from '../../utils/styled-components'
import {GrowthTile} from '../../components/growth-chart-tile'
import {Chart} from '../../components/pie-charts'
import {ChartsTile} from '../../components/pie-chart-tile'
import {PeopleYouKnow} from '../../components/people-you-know-tab'
export const Documentations = () => (
<ScrollView>


<ScrollView style = {{ backgroundColor:"#FFC170"}}>
<View style= {{margin:20}}>
<GrowthTile/>
</View>





<View style= {{margin:20}}>
<ChartsTile/>
</View>
</ScrollView>

<PeopleYouKnow/>

<ScrollView style = {{backgroundColor:"black"}}>
<View style = {{margin:20}}>
<Title style = {{color: "white", fontSize: 30}}>GALLERY</Title>
<Gallery/>
</View>
</ScrollView>

</ScrollView>
)