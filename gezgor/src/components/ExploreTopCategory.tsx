import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../assets&styles/theme'
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { FontawesomeObject, Icon } from '@fortawesome/fontawesome-svg-core'


interface ExploreTopCategoryProps{
  backgroundColor:string,
  iconName:Icon,
  buttonNamme:string
}

const ExploreTopCategory = ({backgroundColor,iconName,buttonNamme}:ExploreTopCategoryProps) => {

  return (
    <View style={{
      width:106,
      height:39,
      backgroundColor:backgroundColor,
      justifyContent:'center',
      flexDirection:'row',
      borderRadius:21,
      alignItems:'center',
    }}>
        <TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <FontAwesomeIcon style={{paddingHorizontal:5}} size={17.73} color={theme.colors.white[500]} icon={iconName}></FontAwesomeIcon>
      <Text style={{fontSize:15,fontWeight:'600',color:theme.colors.white[500],paddingHorizontal:5}}>{buttonNamme}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}



const styles=StyleSheet.create({
    ExploreTopCategoryBox:{

    }
})

export default ExploreTopCategory