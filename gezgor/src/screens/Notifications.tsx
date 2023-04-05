import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { theme } from '../assets&styles/theme'
import { faBell} from '@fortawesome/free-solid-svg-icons'
const Notifications = ({navigation}:any) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <FontAwesomeIcon style={{marginBottom:30}} size={70} color={theme.colors.white[900]} icon={faBell}></FontAwesomeIcon>
      <Text style={{fontSize:19,fontWeight:'500'}}>There is not any notifications yet</Text>
    </View>
  )
}

export default Notifications