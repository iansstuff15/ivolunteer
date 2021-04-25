import React from 'react'
import { Image, ScrollView } from 'react-native'

import {FeaturedSection} from '../sections/featured-section'
import {EventsSection} from '../sections/events-section'
import {CommunitySection} from '../sections/community-section'


import {HeaderComponent} from '../components/header.component'




export const Home = ({navigation}) => (
    
    <ScrollView>

    
    <HeaderComponent/>
    <FeaturedSection/>
    <EventsSection navigation = {navigation}/>
    <CommunitySection navigation = {navigation}/>
    </ScrollView>
)