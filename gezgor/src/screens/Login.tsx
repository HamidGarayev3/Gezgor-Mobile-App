import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Explore from './Explore'


const Login = ({navigation}:any) => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:3}}>
        <TouchableOpacity onPress={() =>
            navigation.navigate('Explore')
            }  style={{width:271,height:58,borderRadius:15,backgroundColor:'#3D56F0'}}></TouchableOpacity>
      </View>
      <View style={{flex:1}}></View>
      <View style={{flex:4}}></View>
      <View style={{flex:1}}></View>
      <View style={{flex:2}}></View>
      <View style={{flex:1}}></View>
      <View style={{flex:4}}></View>
      <View style={{flex:1}}></View>
    </View>
  )
}

export default Login