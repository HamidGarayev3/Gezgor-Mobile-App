import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostButton from '../components/Button/PostButton'
import { theme } from '../assets&styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarsStaggered,faBell } from '@fortawesome/free-solid-svg-icons'

const Explore = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.ExploreTabTop}>
        <View style={{flexDirection:"row",padding:20}}><FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBarsStaggered}></FontAwesomeIcon>
        <View style={styles.ExploreTabTopLocation}><Text style={styles.ExploreTabTopLocationText}>Current Location</Text></View>
        <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBell}></FontAwesomeIcon>
        </View>
      </View>

      <View style={{flex:1}}></View>
      <View style={{flex:1}}></View>
      <View style={{flex:3}}></View>
      <View style={{flex:2}}></View>
      <View style={{flex:1}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  ExploreTabTop:{
    flex:2,
    width:'100%',
    height:179,
    backgroundColor:theme.colors.purple[900],
    borderBottomLeftRadius:33,
    borderBottomRightRadius:33
  },
  ExploreTabTopLocationText:{
    color:theme.colors.white[900], 
    textAlign:'center'
  },
  ExploreTabTopLocation:{
  justifyContent:'center',
  alignContent:'center'
  }
})

export default Explore