import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import AboutMe from '../../components/AboutMe';

const Profile = ({navigation}:any) => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:2}}></View>

      <View style={{flex:3,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
      <Image style={{width:96,height:96,borderRadius:50}} source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}></Image>
      </View>

      <View style={{flex:1.4,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24,fontWeight:'500',color:'#120D26'}}>Ashfak Sayem</Text>
      </View>

      <View style={{flex:2,flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center',paddingHorizontal:120}}>
        <View style={{flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{color:'#120D26',fontWeight:'600',fontSize:16}}>200</Text>
        <Text style={{color:'#747688',fontWeight:'400',fontSize:14}} >Following</Text>
        </View>

        <View style={{flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{color:'#120D26',fontWeight:'600',fontSize:16}}>100</Text>
        <Text style={{color:'#747688',fontWeight:'400',fontSize:14}}>Followers</Text>
        </View>
      </View>

      <View style={{flex:2,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{width:154,height:50,borderWidth:2,borderRadius:15,borderColor:'#5669FF',flexDirection:'row'}}  onPress={() =>
            navigation.navigate('EditProfileScreen')
            }>
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginLeft:20,flexDirection:'row'}} >
        <FontAwesomeIcon size={22} color={'#5669FF'} icon={faPenToSquare} />
        <Text style={{color:'#5669FF',fontWeight:'400',fontSize:16,marginLeft:14}}>Edit Profile</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={{flex:4,paddingHorizontal:20}}>
        <AboutMe text={'Just like Sharp Solid and the Sharp Regular icons, Sharp Light favors a clean, modern elegance when looking for an on-trend design that portrays a serious but delicate feel. Not sure when using Light is the right call? Take a look at other elements in your project like typography and UI elements. '}></AboutMe>
      </View>

      <View style={{flex:1}}></View>

      <View style={{flex:2}}></View>

      <View style={{flex:1.5}}></View>
    </View>
  )
}

export default Profile

