import { View, Text, StyleSheet,Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import PostButton from '../components/Button/PostButton'
import { theme } from '../assets&styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarsStaggered,faBell,faMagnifyingGlass,faFilter,faPalette,faUtensils,faMusic,faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Searchbar } from 'react-native-paper';
import { height, width } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import ExploreTopCategory from '../components/ExploreTopCategory'
import { Image } from '@rneui/base'

const DATA=[
  {"date":'10 JUN', "title":'International Band', "location":'36 Guild Street London,UK','image':'https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Featured-Image.png'}
  , {"date":'10 JUN', "title":'International Band', "location":'36 Guild Street London,UK','image':'https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Featured-Image.png'}
]
const Explore = ({navigation}:any) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
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
        
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}></View>
        <View style={{flex:1}}><ExploreTopCategory iconName={faUtensils} backgroundColor='#29D697' buttonNamme='Food'></ExploreTopCategory></View>
        <View style={{flex:1}}><ExploreTopCategory iconName={faPalette} backgroundColor='#46CDFB' buttonNamme='Art'></ExploreTopCategory></View>
        <View style={{flex:1}}><ExploreTopCategory iconName={faMusic} backgroundColor='#F59762' buttonNamme='Music'></ExploreTopCategory></View>
        </View>
        
      </View>
      <View style={{flex:1}}></View>
      <View style={{flex:4,marginLeft:20}}>
      <FlatList 
      horizontal={true}
      data={DATA}
      renderItem={({ item }:any) => <ExploreScreenCard item={item} navigation={navigation}  />}
      />
       
      </View>
      <View style={{flex:2}}></View>
      <View style={{flex:1}}></View>
    </View>
  )
}


const ExploreScreenCard = ({item,navigation, }:any) => {
return (
  <View style={styles.card}>
  <View style={{padding:10}}><Image source={{ uri: item.image }} style={styles.image} /></View>
  <View style={{position:'absolute',zIndex:100,top:0,marginLeft:198,marginTop:30,backgroundColor:'white',width:30,height:30}}><FontAwesomeIcon size={14} color={'red'} icon={faBookmark}></FontAwesomeIcon></View>

  <View style={styles.content}>
    <Text style={styles.date}>{item.date}</Text>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.location}>{item.location}</Text>
  </View>
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


card: {
  backgroundColor: '#fff',
  borderRadius: 8,
  marginBottom: 16,
  overflow: 'hidden',
  width:237,
  marginHorizontal:5,
},
image: {
  width: 218,
  height: 131,
  borderRadius:8
},
content: {
  padding: 16,
},
date: {
  fontSize: 14,
  color: '#777',
},
title: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
  color:'black'
},
location: {
  fontSize: 13,
  color: '#2B2849',
  bottom:0
}
})

export default Explore