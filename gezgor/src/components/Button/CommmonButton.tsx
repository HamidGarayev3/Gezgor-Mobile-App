import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../../assets&styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CommmonButtons{
    title:string,
    price?:string
}

const CommmonButton = ({title,price}:CommmonButtons) => {
  return (

<View style={{zIndex:999,position:'absolute',bottom:0,marginBottom:10,marginLeft:60}}>
<TouchableOpacity style={{flexDirection:'row',width:271,height:58,backgroundColor:'#5669FF',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:20,}}>
        <Text style={{textAlign:'center',fontSize:16,fontWeight:'600',color:theme.colors.white[500]}}>{title} {price}</Text>

     </TouchableOpacity>
     <View style={{width:30,height:30,justifyContent:'center',alignItems:'center',borderRadius:35,backgroundColor:'#3D56F0',position:'absolute',marginLeft:230,marginTop:15}}>
        <FontAwesomeIcon size={14} color={theme.colors.white[500]} icon={faArrowRight}></FontAwesomeIcon>
        </View>
</View>

  )
}

export default CommmonButton