import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'


interface FollowButtonContent{
    title:string,
    backgroundColor:string
}

const FollowButton = () => {
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:'rgba(86, 105, 255, 0.12)',paddingHorizontal:10,paddingVertical:5,borderRadius:10}}><Text>Follow</Text></TouchableOpacity>
    </View>
  )
}

export default FollowButton