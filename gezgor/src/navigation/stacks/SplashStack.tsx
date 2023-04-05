import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../../screens/Explore';
import Splash from '../../screens/Splash';

const SplashStackScreen = createNativeStackNavigator();

const SplashStack = () => {
  return (
<SplashStackScreen.Navigator>
<SplashStackScreen.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
        <SplashStackScreen.Screen
          name="Explore"
          component={Explore}
          options={{headerShown:false}}
        />

        

      </SplashStackScreen.Navigator>
  )
}

export default SplashStack