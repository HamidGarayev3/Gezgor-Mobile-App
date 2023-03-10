import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from './tabs/HomeTab';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
    {
    (
                <>
                    <Stack.Screen options={{
                        headerShown: false
                    }} name="Main" component={HomeTab} />

                </>
                                  )

                                }
                
                
                
                            </Stack.Navigator>
  )
}

export default index