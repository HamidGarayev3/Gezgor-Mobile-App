import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from '../../assets&styles/theme';
import Home from '../../screens/Home';
import PlaceDetail from '../../screens/PlaceDetail';


const HomeStackScreen = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}:any) => {
  return (
    <HomeStackScreen.Navigator>
        <HomeStackScreen.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />

        <HomeStackScreen.Screen
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
      </HomeStackScreen.Navigator>
  )
}

export default HomeStack