import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceDetail from '../../screens/PlaceDetail';
import Explore from '../../screens/Explore';


const ExploreStackScreen = createNativeStackNavigator();


const ExploreStack = () => {
  return (
    <ExploreStackScreen.Navigator>
        <ExploreStackScreen.Screen
          name="Explore"
          component={Explore}
          options={{headerShown:false}}
        />

        <ExploreStackScreen.Screen
          name="MuseumDetail"
          component={PlaceDetail}
        />
      </ExploreStackScreen.Navigator>
  )
}

export default ExploreStack