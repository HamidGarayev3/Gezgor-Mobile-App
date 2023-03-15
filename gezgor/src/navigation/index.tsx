import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from './tabs/HomeTab';
import ExploreStack from './stacks/ExploreStack';
import PostStack from './stacks/PostStack';
import ProfileStack from './stacks/ProfileStack';
import HomeStack from './stacks/HomeStack';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
    
                <>
                                 <Stack.Screen options={{
                                   headerShown: false
                    }}             name="Main" component={HomeTab} />
                </>
                                <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="HomeStack"
                                    component={HomeStack} />
                                 <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="ExploreStack"
                                    component={ExploreStack} />
                                    
                                    <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="PostStack"
                                    component={PostStack} />
                                     <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="ProfileStack"
                                    component={ProfileStack} />

                            </Stack.Navigator>
                            
  )
}

export default index