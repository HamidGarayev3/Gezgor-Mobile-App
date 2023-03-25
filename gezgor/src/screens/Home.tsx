import { View, Text, StyleSheet, TouchableOpacity,FlatList, ScrollView } from 'react-native'
import React from 'react'
import PostButton from '../components/Button/PostButton'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ExploreTopCategory from '../components/ExploreTopCategory'
import { faBarsStaggered,faBell,faMagnifyingGlass,faFilter,faPalette,faUtensils,faMusic } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../assets&styles/theme'
import { TextInput } from 'react-native'
import { Image } from '@rneui/base/dist/Image'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const DATA=[
  {"id":'1',"date":'10 JUN', "title":'International Band', "location":'36 Guild Street London,UK','image':'https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1679875200&Signature=KbLY4AvEAkzN0dSOHQFYG3dVZmObf3826QshrnuT7aYueB1IKHlUOrF0HRo3T8qQCuFE6l-a380ORk0l4SmLOWh22oUKZdGaQc6UL07BerZxyD9E1OjkMpPHWszLvr27dOSTii67C~XoJLwG3ZQAbnr95qFwpiXiEIieyWg~Xzbw01fqToYV8hJsuKBm5WMvLu1ftEaGn~92S47ag-hjlGp4Sc11MaEGuTWr043-HBLimKbjn-nAgS49h06WpOBUEnGIq~4W5DWx4JtFUJA9S43zS4Mxyzlf~xr1akBCZCve9-cVyA~TFsHfPNtCqTo90KwNMYjSip4PRAG2d2Impw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',"description":'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc'}
  , {"id":'2',"date":'10 JUN', "title":'Jo Malone London’s Mo..', "location":'36 Guild Street London,UK','image':'https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1679875200&Signature=hoWQVpVwehrzCa8BZv9x7zcSjazl0WYnLlLYvYT8Pzxcry6vMJn3GwJPcuyCVvI0z3P8SoixjTtuOjsIjY6E8MW-XMjKFOLTyHThRGw6Qt8IFPzJuIj7ntz0u0pLQuyv9XY96ZZAq7sDNJe20bCnOrVLQzV9aKlgcEf4fd-teadzu7s7QoEpgym9riMslTl0i2gg0JzQfx4JS3OB~VDnWnA0FBK4VasB6gZSVKOS8wIWk2BsAHPkzA1pOiRumBZnooocbjZY7CarRY97T4ISfJA1FTqF5-hdn960Mg1GuK8iU2GNWrP3As1GcCpTxOCZnpEGWv73QevnlXkMSh2jjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',"description":'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc'}
]

const Home = ({navigation}:any) => {
  return (
          <View style={{flex:1}}>
       <View style={{flex:1}}>
       <View style={styles.ExploreTabTop}>
    <View style={{flexDirection:"row",paddingTop:20,paddingHorizontal:20,justifyContent:'space-between'}}><FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBarsStaggered}></FontAwesomeIcon>
    <View style={styles.ExploreTabTopLocation}><Text style={styles.ExploreTabTopLocationText}>Current Location</Text></View>
    <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBell}></FontAwesomeIcon>
    </View>

    
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:18}}></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faUtensils} backgroundColor='#29D697' buttonNamme='Food'></ExploreTopCategory></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faPalette} backgroundColor='#46CDFB' buttonNamme='Art'></ExploreTopCategory></View>
    <View style={{flex:1}}><ExploreTopCategory iconName={faMusic} backgroundColor='#F59762' buttonNamme='Music'></ExploreTopCategory></View>
    </View>
    
  </View>
 </View>

 <View style={{flex:7,marginTop:27}}>
 <FlatList
      data={DATA}
      renderItem={({ item }:any) => <ExploreScreenCard item={item} navigation={navigation}  />}
      />
 </View>

    </View>
  )
}
const ExploreScreenCard = ({item,navigation, }:any) => {
  return (
  <TouchableOpacity style={styles.card} onPress={() =>
              navigation.navigate('PlaceDetail', { id: item.id })
              }>
  <View style={{padding:10}}><Image source={{ uri: item.image }} style={styles.image} /></View>
    <View style={styles.ExploreCardSaveIcon}><FontAwesomeIcon size={14} color={'red'} icon={faBookmark}></FontAwesomeIcon></View>
    <View style={styles.ExploreCardDate}><Text style={styles.date}>{item.date}</Text></View>
    <View style={styles.content}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  </TouchableOpacity>
  
  
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
ExploreCardSaveIcon:{position:'absolute',zIndex:100,top:0,marginLeft:350,marginTop:17,backgroundColor:'white',width:30,height:30,alignItems:'center',justifyContent:'center',borderRadius:8},
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
card: {
  backgroundColor: '#fff',
  borderRadius: 8,
  marginBottom: 16,
  overflow: 'hidden',
  width:'100%',
  minHeight:305
},
image: {
  width: '100%',
  height: 181,
  borderRadius:8
},
content: {
  padding: 16,
},
date: {
  fontSize: 18,
  color: '#F0635A',
  fontWeight:'700'
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

export default Home