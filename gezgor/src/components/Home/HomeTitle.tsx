import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from '../../assets&styles/theme';
import ExploreTopCategory from '../ExploreTopCategory';
import { TextInput } from 'react-native-paper';
import { faBarsStaggered,faBell,faMagnifyingGlass,faFilter,faPalette,faUtensils,faMusic } from '@fortawesome/free-solid-svg-icons'

const HomeTitle = () => {
  return (
 <View style={{flex:1}}>
       <View style={styles.ExploreTabTop}>
    <View style={{flexDirection:"row",paddingTop:20,paddingHorizontal:20,justifyContent:'space-between'}}><FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBarsStaggered}></FontAwesomeIcon>
    <View style={styles.ExploreTabTopLocation}><Text style={styles.ExploreTabTopLocationText}>Current Location</Text></View>
    <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBell}></FontAwesomeIcon>
    </View>
    <View style={styles.SearchBar} >
      <View style={{flexDirection:'row'}} >
      <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faMagnifyingGlass}></FontAwesomeIcon>
      <TextInput placeholderTextColor={theme.colors.white[100]}  placeholder='| Search' style={styles.ExploreSearchInput} ></TextInput>
      </View>
      <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faFilter}></FontAwesomeIcon>
    </View>
    
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:18}}></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faUtensils} backgroundColor='#29D697' buttonNamme='Food'></ExploreTopCategory></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faPalette} backgroundColor='#46CDFB' buttonNamme='Art'></ExploreTopCategory></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faMusic} backgroundColor='#F59762' buttonNamme='Music'></ExploreTopCategory></View>
    </View>
    
  </View>
 </View>
  )
}
const styles = StyleSheet.create({
    ExploreTabTop:{
      flex:2,
      width:'100%',
      height:179,
      backgroundColor:'#4A43EC',
      borderBottomLeftRadius:33,
      borderBottomRightRadius:33,
    },
    ExploreTabTopLocationText:{
      color:theme.colors.white[900], 
    },
    ExploreTabTopLocation:{
    justifyContent:'center',
    alignContent:'center'
    },
    SearchBar:{
      padding:20,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    ExploreSearchInput:{
      height:32,
      fontSize:20
    },
    CategorySport:{
      width:106,
      padding:10,
      backgroundColor:'orange'
    },
    ExploreTopCategoryBox:{
      width:200,
      height:100,
      backgroundColor:'Orange'
  },
  ExploreCardSaveIcon:{position:'absolute',zIndex:100,top:0,marginLeft:190,marginTop:17,backgroundColor:'white',width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:8},
  ExploreCardDate:{
    position:'absolute',
    zIndex:100,
    top:0,
    backgroundColor:theme.colors.white[500],
    borderRadius:8,
    width:45,
    height:45,
    marginLeft:17,
    marginTop:17
  },
})

export default HomeTitle