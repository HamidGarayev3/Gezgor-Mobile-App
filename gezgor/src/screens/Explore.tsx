import { View, Text, StyleSheet,Dimensions, FlatList, TextInput } from 'react-native'
import React from 'react'
import PostButton from '../components/Button/PostButton'
import { theme } from '../assets&styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarsStaggered,faBell } from '@fortawesome/free-solid-svg-icons'
import { Searchbar } from 'react-native-paper';
import { height, width } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'


const Explore = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={{flex:1}}>

      <View style={styles.ExploreTabTop}>
        <View style={{flexDirection:"row",padding:20,justifyContent:'space-between'}}><FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBarsStaggered}></FontAwesomeIcon>
        <View style={styles.ExploreTabTopLocation}><Text style={styles.ExploreTabTopLocationText}>Current Location</Text></View>
        <FontAwesomeIcon size={24} color={theme.colors.white[900]} icon={faBell}></FontAwesomeIcon>
        </View>
        <View style={styles.SearchBar} >
          <TextInput inlineImageLeft='search_icon' placeholderTextColor={theme.colors.white[100]}  placeholder='| Search' style={styles.ExploreSearchInput} ></TextInput>
        </View>
        <View>
          
        </View>
      </View>

      <View style={{flex:1}}>

      </View>
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
    flexDirection:'row'
  },
  ExploreSearchInput:{

  }
})

export default Explore