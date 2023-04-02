import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'

const Profile = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:2}}></View>

      <View style={{flex:3,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
      <Image style={{width:96,height:96,borderRadius:50}} source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}></Image>
      </View>

      <View style={{flex:1.4,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24,fontWeight:'500',color:'#120D26'}}>Ashfak Sayem</Text>
      </View>

      <View style={{flex:2}}></View>

      <View style={{flex:2}}></View>

      <View style={{flex:4}}></View>

      <View style={{flex:1}}></View>

      <View style={{flex:2}}></View>

      <View style={{flex:1.5}}></View>
    </View>
  )
}

export default Profile

