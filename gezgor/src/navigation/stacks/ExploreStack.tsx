import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceDetail from '../../screens/PlaceDetail';
import Explore from '../../screens/Explore';
import { theme } from '../../assets&styles/theme';


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
          name="PlaceDetail"
          component={PlaceDetail}
          options={{
          headerTransparent:true,
          headerTitle:'Event Details',
          headerTitleStyle:{
            color:theme.colors.white[500],
            fontSize:24
          },
          headerTintColor:theme.colors.white[500]
        }}
        />
      </ExploreStackScreen.Navigator>
  )
}

export default ExploreStack