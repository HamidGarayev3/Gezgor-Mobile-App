import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { theme } from '../../assets&styles/theme';
import Profile from '../../screens/Profile/Profile';
import EditProfileScreen from '../../screens/Profile/EditProfileScreen';
import InterestsEditScreen from '../../screens/Profile/InterestsEditScreen';
import Menu from '../../components/Menu';

const ProfileStackScreen = createNativeStackNavigator();

const ProfileStack = () => {
  return (
<ProfileStackScreen.Navigator>
        <ProfileStackScreen.Screen
          name="Profile"
          component={Profile}
          options={{ headerTransparent:true,
            headerTitle:'Profile',
            headerTitleStyle:{
              color:'black',
              fontSize:24
            },
            headerTintColor:'black'}}
        />

        <ProfileStackScreen.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
          headerTransparent:true,
          headerShown:false,
          headerTitleStyle:{
            color:theme.colors.white[500],
            fontSize:24
          },
          headerTintColor:theme.colors.white[500]
        }}
        />

<ProfileStackScreen.Screen
          name="InterestsEditScreen"
          component={InterestsEditScreen}
          options={{
          headerTransparent:true,
          headerShown:false,
          headerTitleStyle:{
            color:theme.colors.white[500],
            fontSize:24
          },
          headerTintColor:theme.colors.white[500]
        }}
        />

<ProfileStackScreen.Screen
          name="Menu"
          component={Menu}
          options={{
          headerTransparent:true,
          headerTitle:'Menu',
          headerTitleStyle:{
            color:theme.colors.white[500],
            fontSize:24
          },
          headerTintColor:theme.colors.white[500]
        }}
        />
      </ProfileStackScreen.Navigator>
  )
}

export default ProfileStack