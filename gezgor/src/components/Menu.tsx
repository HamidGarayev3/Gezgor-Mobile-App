import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { theme } from '../assets&styles/theme'
import { faBarsStaggered,faUser,faComment,faCalendar,faBookmark,faEnvelope,faGear,faCircleQuestion,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Image } from '@rneui/base'
import Profile from '../screens/Profile/Profile'
import Home from '../screens/Home'



const Menu = ({navigation}:any) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
      <View style={{flex:3,marginTop:50}}>
      <Image style={{width:96,height:96,borderRadius:70}} source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}></Image>
      </View>
      <View style={{flex:2}}>
        <Text style={{fontSize:22,fontWeight:'500',color:'#000000'}}>Ashfak Sayem</Text>
      </View>

     <View style={{flex:8}}>
     <View style={{flex:1,flexDirection:'row',}}>
<Pressable  onPress={() =>
            navigation.navigate('Profile')
            } style={{flexDirection:'row'}}>
<FontAwesomeIcon size={23} color={'#767676'} icon={faUser}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>My Profile</Text>
</Pressable>
      </View>
      
      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faComment}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faCalendar}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Calender</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,flexDirection:'row',}}>
       <Pressable onPress={() =>
            navigation.navigate('Home')
            } style={{flexDirection:'row'}}>
       <FontAwesomeIcon size={23} color={'#767676'} icon={faBookmark}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Saved Events</Text>
       </Pressable>


      </View>

      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faEnvelope}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faGear}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faCircleQuestion}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Helps & FAQs</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,flexDirection:'row',}}>
        <TouchableOpacity style={{flexDirection:'row'}}><FontAwesomeIcon size={23} color={'#767676'} icon={faArrowRightFromBracket}></FontAwesomeIcon>
        <Text style={{fontSize:19,fontWeight:'500',color:'#000000',marginLeft:10}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
     </View>
    </View>
  )
}

export default Menu